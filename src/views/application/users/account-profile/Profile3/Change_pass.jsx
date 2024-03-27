import { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useEffect } from 'react';
import useAuth from 'hooks/useAuth';
import { Typography, CardActions } from '@mui/material';
import config from '../../../../../config';
import Swal from 'sweetalert2';

// material-ui
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import '../../../../../assets/css/swal.css'

// Error message style
const errorStyle = {
    color: 'red', // Set the text color to red
    fontSize: '0.75rem', // Adjust font size if needed
    marginTop: '0.25rem' // Adjust margin top if needed
};

const Security = () => {
    const [submitted, setSubmitted] = useState(false);
    const { user } = useAuth();
    const [isSubmitting, setIsSubmitting] = useState(false); // Initially set to null
    const [passwordFormData, setPasswordFormData] = useState({});
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        iconColor: 'white',
        customClass: {
          popup: 'colored-toast',
        },
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: true,
      })
    useEffect(() => {
        if (user) {
            const passwordData = {
                current_password: '',
                password: '',
                confirm_password: ''
            };
            setPasswordFormData(passwordData);
        }
    }, [user]);

    // Form submit handler
    // const handlePasswordSubmit = async (values, { resetForm }) => {
    //     const { userID, current_password, confirm_password, ...rest } = values;
    //     try {
    //         const response = await fetch(`https://localhost:8080/api/referral/update-referee-passwords/${userID}`, {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 Authorization: `Bearer ${user.token}`
    //             },
    //             body: JSON.stringify({ current_password, confirm_password, ...rest })
    //         });

    //         if (!response.ok) {
    //             throw new Error('Failed to update password');
    //         }

    //         // Optionally handle success response
    //         console.log('Password updated successfully');

    //         resetForm(); // Optional: Reset form after successful submission
    //         setSubmitted(true);
    //     } catch (error) {
    //         console.error('Error updating password:', error);
    //         // Optionally handle error
    //     }
    // };

    const handlePasswordSubmit = async (values, { resetForm }) => {
        setIsSubmitting(true)
        const { current_password, confirm_password } = values;
        const userID = user._id;
        console.log('userID:', userID);
        console.log('current_password:', current_password);
        console.log('confirm_password:', confirm_password);
        try {
            // const response = await fetch(`https://localhost:8080/api/referral/update-referee-password`, {
            const response = await fetch(config.apiUrl + 'api/referral/update-referee-password', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`
                },
                body: JSON.stringify({ current_password, confirm_password, userID })
            });

            if (!response.ok) {
                const content = await response.json()
                throw new Error(content.error);
            }

            // Optionally handle success response
            console.log('Password updated successfully');
            Toast.fire({
                icon: 'success',
                title: 'Success',
                text: 'Password updated successfully'
            });
            resetForm(); // Optional: Reset form after successful submission
            setIsSubmitting(false)
            setSubmitted(true);

        } catch (error) {
            console.error('Error updating password:', error);
            Toast.fire({
                icon: 'error',
                title: 'Error',
                text: error.message
            });
            setIsSubmitting(false)
            // Optionally handle error
        }
    };

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item sm={6} md={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                            <Formik
                                enableReinitialize
                                initialValues={{
                                    current_password: passwordFormData.current_password,
                                    password: passwordFormData.password,
                                    confirm_password: passwordFormData.confirm_password
                                }}
                                validationSchema={Yup.object().shape({
                                    current_password: Yup.string().required('Current Password is required'),
                                    password: Yup.string()
                                        .min(5, 'Password must be at least 5 characters')
                                        .required('Password is required'),
                                    confirm_password: Yup.string()
                                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                                        .required('Confirm Password is required')
                                })}
                                onSubmit={handlePasswordSubmit}
                            >
                                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                                    <form onSubmit={handleSubmit}>
                                        <Grid container direction="column" justifyContent="center">
                                            <Grid container spacing={gridSpacing}>
                                                <Grid item xs={12} style={{marginTop:'0px'}}>
                                                    <Typography variant="h5" component="h5">
                                                        Current Password
                                                    </Typography>
                                                    <TextField
                                                        fullWidth
                                                        type="password"
                                                        margin="normal"
                                                        name="current_password"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        value={values.current_password}
                                                        variant="outlined"
                                                        error={Boolean(touched.current_password && errors.current_password)}
                                                        helperText={touched.current_password && errors.current_password}
                                                    />
                                                </Grid>

                                                <Grid item xs={12} sm={6} style={{marginTop:'-5px'}}>
                                                    <Typography variant="h5" component="h5">
                                                        New Password
                                                    </Typography>
                                                    <TextField
                                                        fullWidth
                                                        type="password"
                                                        margin="normal"
                                                        name="password"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        value={values.password}
                                                        variant="outlined"
                                                        error={Boolean(touched.password && errors.password)}
                                                        helperText={touched.password && errors.password}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <Typography variant="h5" component="h5" style={{marginTop:'-5px'}}>
                                                        Confirm Password
                                                    </Typography>
                                                    <TextField
                                                        fullWidth
                                                        type="password"
                                                        margin="normal"
                                                        name="confirm_password"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        value={values.confirm_password}
                                                        variant="outlined"
                                                        error={Boolean(touched.confirm_password && errors.confirm_password)}
                                                        helperText={touched.confirm_password && errors.confirm_password}
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12}>
                                        <Stack direction="row" style={{marginTop:'15px'}} >
                                            <AnimateButton>
                                            <Button  type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                                                    Save Password
                                                </Button>
                                            </AnimateButton>
                                        </Stack>
                                    </Grid>
                                            
                                        </Grid>
                                    </form>
                                )}
                            </Formik>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Security;
