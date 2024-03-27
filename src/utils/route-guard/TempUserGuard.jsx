import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// project imports
import useAuth from 'hooks/useAuth';

// ==============================|| AUTH GUARD ||============================== //

/**
 * Authentication guard for routes
 * @param {PropTypes.node} children children element/node
 */
const TempUserGuard = ({ children }) => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const tempUser = JSON.parse(localStorage.getItem('tempUser'));

        if (!tempUser) {
            navigate('register', { replace: true });
        }
    }, [navigate]);

    return children;
};

TempUserGuard.propTypes = {
    children: PropTypes.node
};

export default TempUserGuard;
