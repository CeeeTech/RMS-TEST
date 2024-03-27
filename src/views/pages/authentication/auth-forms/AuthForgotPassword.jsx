import { useNavigate } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Swal from 'sweetalert2'

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';
import useAuth from 'hooks/useAuth';
import useScriptRef from 'hooks/useScriptRef';

import { useDispatch } from 'store';
import { openSnackbar } from 'store/slices/snackbar';
import '../../../../assets/css/swal.css'
import config from '../../../../config';

// ========================|| FIREBASE - FORGOT PASSWORD ||======================== //

const AuthForgotPassword = ({ ...others }) => {
    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-start',
        iconColor: 'white',
        customClass: {
          popup: 'colored-toast',
        },
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: true,
      });
    const { isLoggedIn, resetPassword } = useAuth();

    return (
        <Formik
            initialValues={{ phone: '', submit: null }}
            validationSchema={Yup.object().shape({
                phone: Yup.string()
                    .matches(/^[0-9]{10}$/, 'Must be a valid phone number')
                    .required('Phone number required')
            })}
            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {           
                    try {
                        // Make a fetch or axios call to your backend API to send the verification code
                        // get the phoneNumber from localstorage tempUser
                        const phoneNumber = values.phone;


                        if (!phoneNumber) {
                            Toast.fire({
                                icon: 'error',
                                title: 'No Phone Number Found'
                            })
                            console.error('No phone number found');
                            return;
                        }

                        const response = await fetch(config.apiUrl + 'api/referral/request-reset-password', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ phoneNumber })
                        });

                        if (!response.ok) {
                            const data = await response.json();
                            throw new Error(data.error);
                        } else {
                            const data = await response.json();
                            console.log(data);
                            Toast.fire({
                                icon: 'success',
                                title: 'Temporary Password Sent Successfully'
                            })
                            navigate('/login');
                                // remove tempUser from localstorage
                        }

                        } catch (error) {
                        console.error('Error sending verification code:', error.message);

                        Toast.fire({
                            icon: 'error',
                            title: error.message
                        })
                        
                        // Handle error
                        }
            }}
        >
            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                <form noValidate onSubmit={handleSubmit} {...others}>
                    <FormControl fullWidth error={Boolean(touched.phone && errors.phone)} sx={{ ...theme.typography.customInput }}>
                        <InputLabel htmlFor="outlined-adornment-phone-forgot">Phone number</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-phone-forgot"
                            type="tel" // Change input type to "tel" for phone numbers
                            value={values.phone}
                            name="phone"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            label="Phone number"
                            inputProps={{}}
                        />
                        {touched.phone && errors.phone && (
                            <FormHelperText error id="standard-weight-helper-text-phone-forgot">
                                {errors.phone}
                            </FormHelperText>
                        )}
                    </FormControl>

                    {errors.submit && (
                        <Box sx={{ mt: 3 }}>
                            <FormHelperText error>{errors.submit}</FormHelperText>
                        </Box>
                    )}

                    <Box sx={{ mt: 2 }}>
                        <AnimateButton>
                            <Button
                                disableElevation
                                disabled={isSubmitting}
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                                color="secondary"
                            >
                                Send
                            </Button>
                        </AnimateButton>
                    </Box>
                </form>
            )}
        </Formik>
    );
};

export default AuthForgotPassword;
