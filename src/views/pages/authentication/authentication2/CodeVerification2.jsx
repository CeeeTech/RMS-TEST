import { Link } from 'react-router-dom';

// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

// project imports
import AuthWrapper2 from '../AuthWrapper2';
import AuthCardWrapper from '../AuthCardWrapper';
import Logo from 'ui-component/Logo';
import AnimateButton from 'ui-component/extended/AnimateButton';
import AuthCodeVerification from '../auth-forms/AuthCodeVerification';
import BackgroundPattern2 from 'ui-component/cards/BackgroundPattern2';
import AuthFooter from 'ui-component/cards/AuthFooter';
import AuthSlider from 'ui-component/cards/AuthSlider';

// assets
import bgImage from 'assets/images/auth/sltc-bg.jpg';
import bgPattern from 'assets/images/auth/sltc-crm-back-v2.jpg';
// carousel items
const items = [
    {
        title: 'Powerful and easy to use multi-purpose theme.',
        description: 'Powerful and easy to use multipurpose theme'
    },
    {
        title: 'Powerful and easy to use multi-purpose theme.',
        description: 'Powerful and easy to use multipurpose theme'
    },
    {
        title: 'Powerful and easy to use multi-purpose theme.',
        description: 'Powerful and easy to use multipurpose theme'
    }
];

// ===========================|| AUTH2 - CODE VERIFICATION ||=========================== //

const CodeVerification = () => {
    const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));
    const phoneNumber = JSON.parse(window.localStorage.getItem('tempUser')).contact_number;
    return (
        <AuthWrapper2 style={{ backgroundImage: `url(${bgPattern})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Grid container justifyContent={{ xs: 'center', md: 'space-between' }} alignItems="center">
                <Grid item md={6} lg={7} xs={12} sx={{ minHeight: '100vh' }}>
                    <Grid
                        sx={{ minHeight: '100vh' }}
                        container
                        alignItems={{ xs: 'center', md: 'flex-start' }}
                        justifyContent={{ xs: 'center', md: 'space-between' }}
                    >
                        <Grid item sx={{ display: { xs: 'none', md: 'block' }, m: 3 }}>
                            
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            container
                            justifyContent="center"
                            alignItems="center"
                            sx={{ minHeight: { xs: 'calc(100vh - 68px)', md: 'calc(100vh - 152px)' } }}
                        >
                            <Stack justifyContent="center" alignItems="center" spacing={5} m={2}>
                                
                                <AuthCardWrapper border={downLG}>
                                    <Grid container spacing={2} justifyContent="center">
                                        <Grid item xs={12}>
                                            <Stack alignItems="center" justifyContent="center" spacing={1}>
                                            <Box component={Link} to="#" >
                                            <Logo />
                                            </Box>
                                                <Typography color="secondary.main" style={{ marginTop:'20px' }} gutterBottom variant={downMD ? 'h3' : 'h2'}>
                                                    Enter Verification Code
                                                </Typography>
                                                <Typography variant="subtitle1" fontSize="1rem">
                                                    We have sent you an SMS to your Phone Number.
                                                </Typography>
                                                <Typography variant="caption" fontSize="0.875rem" textAlign="center">
                                                    We have sent your code to {phoneNumber.substring(0, 3) + "****" + phoneNumber.substring(7)}
                                                </Typography>
                                            </Stack>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <AuthCodeVerification />
                                        </Grid>
                                        
                                       
                                    </Grid>
                                </AuthCardWrapper>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sx={{ m: 3 }}>
                            <AuthFooter />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={6} lg={5} sx={{ position: 'relative', alignSelf: 'stretch', display: { xs: 'none', md: 'block' }, borderRadius:60 }}>
                <img src={bgImage} alt={'background image of SLTC'}                 style={{ position: 'absolute', objectFit: 'cover', width: '100%', height: '100%', borderTopLeftRadius:'100px',filter: 'brightness(40%)',filter: 'contrast(90%)' }}
 />

                </Grid>
            </Grid>
        </AuthWrapper2>
    );
};

export default CodeVerification;
