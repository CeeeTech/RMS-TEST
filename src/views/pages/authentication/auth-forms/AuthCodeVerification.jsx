import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useAuth from 'hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';

// navigate from react-router-dom
import { useNavigate } from 'react-router-dom';

// third-party
import OtpInput from 'react18-input-otp';

// project imports
import { ThemeMode } from 'config';

import config from '../../../../config';
import Swal from 'sweetalert2'
import '../../../../assets/css/swal.css'
// ============================|| STATIC - CODE VERIFICATION ||============================ //
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
  })




const AuthCodeVerification = () => {

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
      })

    const theme = useTheme();
    const [otp, setOtp] = useState('');
    const [isSubmitting, setSubmitting] = useState(false);

    const borderColor = theme.palette.mode === ThemeMode.DARK ? theme.palette.grey[200] : theme.palette.grey[300];
    const navigate = useNavigate();


    async function verifyVerificationCode(verificationCode) {



        try {
            // Make a fetch or axios call to your backend API to send the verification code
            // get the phoneNumber from localstorage tempUser
            const tempUser = JSON.parse(localStorage.getItem('tempUser'));
            const phoneNumber = tempUser.contact_number;
            const id = tempUser._id;
    
           
            if (!phoneNumber) {
                Toast.fire({
                    icon: 'error',
                    title: 'No Phone Number Found'
                })
                console.error('No phone number found');
                return;
            }
    
            const response = await fetch(config.apiUrl + 'api/referral/verifyCode', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ phoneNumber, verificationCode, id })
            });
    
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error);
            } else {
                const data = await response.json();
                console.log(data);
                Toast.fire({
                    icon: 'success',
                    title: 'Verified Successfully!'
                })
                navigate('/login');
                 // remove tempUser from localstorage
                localStorage.removeItem('tempUser');
            }
    
            // Handle success response if necessary
            console.log('Verified'); // navigate to the login page
        } catch (error) {
            console.error('Error sending verification code:', error.message);
            
            Toast.fire({
                icon: 'error',
                title: error.message
            })
            if(error.message=="User Already been Verified"){
                navigate('/login');
                 // remove tempUser from localstorage
                localStorage.removeItem('tempUser');
            }
            // Handle error
        }
    }








    const handleContinue = async () => {
        setSubmitting(true);
        // Check if OTP is not empty before sending
        if (otp.trim() === '') {
            Toast.fire({
                icon: 'error',
                title: 'Verification Code is Empty'
            })
            console.error('Verification code is empty');
            setSubmitting(false);

            return;
        }

        // Send the verification code to the server
        await verifyVerificationCode(otp);
        //navigate('/login');
        setSubmitting(false);

       
    };


    const handleResend = async () => {
        // Check if OTP is not empty before sending
        setSubmitting(true);
        try {
            // Make a fetch or axios call to your backend API to send the verification code
            // get the phoneNumber from localstorage tempUser
            const tempUser = JSON.parse(localStorage.getItem('tempUser'));
            const phoneNumber = tempUser.contact_number;
            const id = tempUser._id;

           
            if (!phoneNumber) {
                Toast.fire({
                    icon: 'error',
                    title: 'No Phone Number Found'
                })
                console.error('No phone number found');
                setSubmitting(false);
                return;

            }
    
            const response = await fetch(config.apiUrl + 'api/referral/resend-verification-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ phoneNumber,id })
            });
    
            if (!response.ok) {
                setSubmitting(false);
                const data = await response.json();
                throw new Error(data.error);

            } else {
                Toast.fire({
                    icon: 'success',
                    title: 'Verification Code Resent Successfully'
                })
                setSubmitting(false);
                const data = await response.json();
                console.log(data);
            }
    
            // Handle success response if necessary
            console.log('Verified'); // navigate to the login page
        } catch (error) {

            console.error('Error sending verification code:', error.message);
            Toast.fire({
                icon: 'error',
                title: error.message
            })
           
            setSubmitting(false);
            if(error.message=="User Already been Verified"){
                navigate('/login');
                 // remove tempUser from localstorage
                localStorage.removeItem('tempUser');
            }
            // Handle error
        }

        // Send the verification code to the server
        // remove tempUser from localstorage
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <OtpInput
                    value={otp}
                    onChange={(otpNumber) => setOtp(otpNumber)}
                    numInputs={4}
                    containerStyle={{ justifyContent: 'space-between' }}
                    inputStyle={{
                        width: '100%',
                        margin: '8px',
                        padding: '10px',
                        border: `1px solid ${borderColor}`,
                        borderRadius: 4,
                        ':hover': {
                            borderColor: theme.palette.primary.main
                        }
                    }}
                    focusStyle={{
                        outline: 'none',
                        border: `2px solid ${theme.palette.primary.main}`
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                <Button disableElevation fullWidth size="large" type="submit" variant="contained" disabled={isSubmitting} onClick={handleContinue}>
                {isSubmitting ? <CircularProgress color="inherit"/> : 'Continue'}

                    
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between" alignItems="baseline">
                    <Typography>Did not receive the message?</Typography>
                    {!isSubmitting && (
  <Typography variant="body1" sx={{ minWidth: 85, ml: 2, textDecoration: 'none', cursor: 'pointer' }} onClick={handleResend}  color="primary">
    Resend code
  </Typography>
)}
                </Stack>
            </Grid>
        </Grid>
    );
};
export default AuthCodeVerification;
