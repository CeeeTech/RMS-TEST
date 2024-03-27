import PropTypes from 'prop-types';
import React, { createContext, useEffect, useReducer } from 'react';

// third-party
import { Chance } from 'chance';
import { jwtDecode } from 'jwt-decode';

// reducer - state management
import { LOGIN, LOGOUT } from 'store/actions';
import accountReducer from 'store/accountReducer';

// project imports
import Loader from 'ui-component/Loader';
import axios from 'utils/axios';

const chance = new Chance();
import config from '../config';

// constant
const initialState = {
    isLoggedIn: false,
    isInitialized: false,
    user: null
};

const verifyToken = (serviceToken) => {
    if (!serviceToken) {
        return false;
    }
    const decoded = jwtDecode(serviceToken);
    /**
     * Property 'exp' does not exist on type '<T = unknown>(token, options) => T'.
     */
    return decoded.exp > Date.now() / 1000;
};

const setSession = (serviceToken) => {
    if (serviceToken) {
        localStorage.setItem('serviceToken', serviceToken);
        axios.defaults.headers.common.Authorization = `Bearer ${serviceToken}`;
    } else {
        localStorage.removeItem('serviceToken');
        delete axios.defaults.headers.common.Authorization;
    }
};

// ==============================|| JWT CONTEXT & PROVIDER ||============================== //
export const JWTContext = createContext(null);

export const JWTProvider = ({ children }) => {
    const [state, dispatch] = useReducer(accountReducer, initialState);

    useEffect(() => {
        const init = async () => {
            try {
                console.log('JWT Context UseEffect has been called');
                const serviceToken = window.localStorage.getItem('serviceToken');
                console.log(serviceToken);

                if (serviceToken && verifyToken(serviceToken)) {
                    setSession(serviceToken);
                    // get the user from local storage
                    const user = JSON.parse(localStorage.getItem('user'));
                    if (user) {
                        dispatch({
                            type: LOGIN,
                            payload: {
                                isLoggedIn: true,
                                user
                            }
                        });
                    }
                } else {
                    dispatch({
                        type: LOGOUT
                    });
                    setSession(null);

                }
            } catch (err) {
                console.error(err);
                dispatch({
                    type: LOGOUT
                });
                setSession(null);

            }
        };

        init();
    }, []);

    const login = async (values) => {
        const response = await fetch(config.apiUrl + 'api/referral/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        });
        const json = await response.json();
        if (response.ok) {
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json));

            const user = JSON.parse(localStorage.getItem('user'));

            // update the auth context
            dispatch({
                type: LOGIN,
                payload: {
                    isLoggedIn: true,
                    json,
                    user
                }
            });
            setSession(json.token);
            return true;
        } else {
            if (json.error == 'User Added Not Verified') {
                return { type: 'added_not_verified', json };
            } else {
                throw new Error(json.error);
                return false;
            }
        }
    };

    const register = async (values) => {
        // todo: this flow need to be recode as it not verified
        const response = await fetch(config.apiUrl + 'api/referral/referees/add-new', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        });
        const json = await response.json();
        window.localStorage.setItem('tempUser', JSON.stringify(json.payload));
        if (response.ok) {
            console.log('verification code sent', json);
            return true;
        } else {
            throw new Error(json.error);
            return false;
        }
    };

    const addBankAccountDetails = async (values) => {
        // todo: this flow need to be recode as it not verified
        const response = await fetch(config.apiUrl + 'api/referral/add-bank-account-details', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        });
        const json = await response.json();
        if (response.ok) {
            console.log('verification code sent', json);
            return true;
        } else {
            throw new Error(json.error);
            return false;
        }
    };

    const logout = () => {
        setSession(null);
        dispatch({ type: LOGOUT });
    };

    const resetPassword = async (email) => {
        console.log(email);
    };

    const updateProfile = () => {};

    if (state.isInitialized !== undefined && !state.isInitialized) {
        return <Loader />;
    }

    return (
        <JWTContext.Provider value={{ ...state, login, logout, register, addBankAccountDetails, resetPassword, updateProfile }}>
            {children}
        </JWTContext.Provider>
    );
};

JWTProvider.propTypes = {
    children: PropTypes.node
};

export default JWTContext;
