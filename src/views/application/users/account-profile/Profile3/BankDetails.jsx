import { useEffect, useState } from 'react'; // Import useState
import React from 'react'; // Remove redundant import
import Swal from 'sweetalert2';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// material-ui
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import config from '../../../../../config';

// Import MenuItem from material-ui
import MenuItem from '@mui/material/MenuItem';

// project imports
import useAuth from 'hooks/useAuth';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import '../../../../../assets/css/swal.css';

// import bankJson and branchJson from src folder
import bankjson from '../../../../../banks.json';
import branchjson from '../../../../../branches.json';

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

// ==============================|| PROFILE 3 - BANK DETAILS ||============================== //

const BankDetails = () => {
    const { user } = useAuth();
    const [bankData, setBankData] = useState(null); // Initially set to null
    const [isSubmitting, setIsSubmitting] = useState(false); // Initially set to null

    const initialValues = {
        account_name: '',
        account_number: '',
        bank_name: '',
        branch: '',
        NIC: ''
    };

    const validationSchema = Yup.object().shape({
        account_name: Yup.string().required('Account name is required'),
        account_number: Yup.string().required('Account number is required'),
        bank_name: Yup.string().required('Bank name is required'),
        branch: Yup.string().required('Branch is required'),
        NIC: Yup.string().required('NIC is required')
    });

    useEffect(() => {
        const fetchBankData = async () => {
            try {
                // const response = await fetch(`https://localhost:8080/api/referral/referees/${user._id}`, {
                const response = await fetch(config.apiUrl + 'api/referral/referees/' + user._id, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${user.token}` }
                });
                const data = await response.json();
                setBankData(data);
                console.log('User:', data);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchBankData();
    }, [user]);

    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        iconColor: 'white',
        customClass: {
            popup: 'colored-toast'
        },
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: true
    });

    const onSubmit = async (values) => {
        try {
            setIsSubmitting(true);
            const response = await fetch(config.apiUrl + 'api/referral/update-bank-details/' + user._id, {
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
            setIsSubmitting(false);
        } catch (error) {
            console.error('Error:', error);
            Toast.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while updating account details'
            });
            setIsSubmitting(false);
        }
    };

    if (!bankData) {
        // Show loading indicator while fetching data
        return <div>Loading...</div>;
    }

    // Define array of bank names
    const bankNames = ['Sampath', 'BOC', 'HNB'];

    // Define array of bank names
    const branchNames = ['Matara', 'Galle', 'Colombo'];

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item sm={6} md={4}></Grid>

            <Grid item sm={6} md={12}>
                <Formik initialValues={bankData} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(formik) => (
                        <Form>
                            <Grid container style={{ marginTop: '-60px' }} spacing={gridSpacing}>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Account Name"
                                        margin="normal"
                                        name="account_name"
                                        value={formik.values.account_name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.account_name && Boolean(formik.errors.account_name)}
                                        helperText={formik.touched.account_name && formik.errors.account_name}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Account Number"
                                        margin="normal"
                                        name="account_number"
                                        value={formik.values.account_number}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.account_number && Boolean(formik.errors.account_number)}
                                        helperText={formik.touched.account_number && formik.errors.account_number}
                                        variant="outlined"
                                    />
                                </Grid>

                                <Grid item xs={12} md={6} style={{ marginTop: '-25px' }}>
                                    <TextField
                                        fullWidth
                                        select
                                        label="Bank Name"
                                        margin="normal"
                                        name="bank_name"
                                        value={formik.values.bank_name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.bank_name && Boolean(formik.errors.bank_name)}
                                        helperText={formik.touched.bank_name && formik.errors.bank_name}
                                        variant="outlined"
                                    >
                                       

                                {bankjson.slice().sort((a, b) => a.ProductParticipation.localeCompare(b.ProductParticipation)).map((bank) => (
                                    <MenuItem key={bank.BankName} value={bank.BankName}>
                                        {bank.ProductParticipation}
                                    </MenuItem>
                                ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} md={6} style={{ marginTop: '-25px' }}>
                                    <TextField
                                        fullWidth
                                        select
                                        label="Branch"
                                        margin="normal"
                                        name="branch"
                                        value={formik.values.branch}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.branch && Boolean(formik.errors.branch)}
                                        helperText={formik.touched.branch && formik.errors.branch}
                                        variant="outlined"
                                    >
                                      {branchjson
                                    .filter((branch) => branch.BankCode === formik.values.bank_name).slice().sort((a, b) => a.BranchName.localeCompare(b.BranchName))
                                    .map((branch) => (
                                        <MenuItem key={branch.BranchCode} value={branch.BranchName}>
                                            {branch.BranchName}
                                        </MenuItem>
                                    ))}
                                    </TextField>
                                </Grid>

                                <Grid item xs={12} md={6} style={{ marginTop: '-25px' }}>
                                    <TextField
                                        fullWidth
                                        label="NIC"
                                        margin="normal"
                                        name="NIC"
                                        value={formik.values.NIC}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.NIC && Boolean(formik.errors.NIC)}
                                        helperText={formik.touched.NIC && formik.errors.NIC}
                                        variant="outlined"
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Stack direction="row" style={{ marginTop: '-10px' }}>
                                        <AnimateButton>
                                            <Button type="submit" variant="contained" disabled={isSubmitting}>
                                                Update Bank Details
                                            </Button>
                                        </AnimateButton>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </Grid>
        </Grid>
    );
};

export default BankDetails;
