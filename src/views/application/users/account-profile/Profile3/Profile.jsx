import { useEffect } from 'react';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import config from '../../../../../config';

// material-ui
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// project imports
import useAuth from 'hooks/useAuth';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');
import '../../../../../assets/css/swal.css'

// ==============================|| PROFILE 3 - PROFILE ||============================== //

const Profile = () => {
    const { user } = useAuth();
    const [userData, setUserData] = useState(null); // Initially set to null
    const [isSubmitting, setIsSubmitting] = useState(false); // Initially set to null

    const validationSchema = Yup.object().shape({
        full_name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        contact_number: Yup.string()
            .matches(/^[0-9]{10}$/, 'Invalid phone number')
            .required('Phone number is required')
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // const response = await fetch(`https://localhost:8080/api/referral/referees/${user._id}`, {
                const response = await fetch(config.apiUrl + 'api/referral/referees/' + user._id, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${user.token}` }
                });
                const data = await response.json();
                setUserData(data);
                console.log('User:', data);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchUserData();
    }, [user]);


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
    const onSubmit = async (values) => {
        try {
            setIsSubmitting(true)
            const response = await fetch(config.apiUrl + 'api/referral/update-referee/' + user._id, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${user.token}` },
                body: JSON.stringify(values)
            });
            const data = await response.json();
            console.log('Success:', data);
            Toast.fire({
                icon: 'success',
                title: 'Success',
                text: 'Account details updated successfully'
            });
            setIsSubmitting(false)

        } catch (error) {
            console.error('Error:', error);
            Toast.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while updating account details'
            });
            setIsSubmitting(false)

        }
    };

    if (!userData) {
        // Show loading indicator while fetching data
        return <div>Loading...</div>;
    }

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                    <Formik initialValues={userData} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {(formik) => (
                            <form onSubmit={formik.handleSubmit}>
                                <Grid container spacing={gridSpacing}>
                                    <Grid item xs={12}>
                                        <TextField
                                        style={{marginTop:'5px'}}
                                            fullWidth
                                            margin="normal"
                                            label="Full Name"
                                            name="full_name"
                                            type="text"
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            value={formik.values.full_name}
                                            error={formik.touched.full_name && Boolean(formik.errors.full_name)}
                                            helperText={formik.touched.full_name && formik.errors.full_name}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            style={{marginTop:'-10px'}}
                                            fullWidth
                                            label="Email"
                                            margin="normal"
                                            name="email"
                                            disabled={true}
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.email && Boolean(formik.errors.email)}
                                            helperText={formik.touched.email && formik.errors.email}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                        style={{marginTop:'-10px'}}
                                            fullWidth
                                            label="Contact Number"
                                            margin="normal"
                                            name="contact_number"
                                            disabled={true}
                                            value={formik.values.contact_number}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.contact_number && Boolean(formik.errors.contact_number)}
                                            helperText={formik.touched.contact_number && formik.errors.contact_number}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Stack direction="row" style={{marginTop:'-10px'}}
>
                                            <AnimateButton>
                                                <Button type="submit" variant="contained" disabled={isSubmitting}>
                                                    Change Details
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
    );
};

export default Profile;
