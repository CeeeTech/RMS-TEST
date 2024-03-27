import { Link } from 'react-router-dom';

// material-ui
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

// project imports
import AuthWrapper2 from '../AuthWrapper2';
import AuthCardWrapper from '../AuthCardWrapper';
import AuthLogin from '../auth-forms/AuthLogin';
import Logo from 'ui-component/Logo';
import BackgroundPattern2 from 'ui-component/cards/BackgroundPattern2';
import AuthFooter from 'ui-component/cards/AuthFooter';
import AuthSlider from 'ui-component/cards/AuthSlider';

// assets
import imgMain from 'assets/images/auth/img-a2-login.svg';
import bgImage from 'assets/images/auth/sltc-bg.jpg';
import bgPattern from 'assets/images/auth/sltc-crm-back-v2.jpg';

// carousel items
const items = [
    {
        title: 'Components Based Design System',
        description: 'Powerful and easy to use multipurpose theme'
    },
    {
        title: 'Ready to use components',
        description: 'Ready made component to apply directly'
    },
    {
        title: 'Multiple dashboard and widgets',
        description: '100+ widgets and customize controls'
    }
];

// ================================|| AUTH2 - LOGIN ||================================ //

const Login = () => {
    const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));

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
                                        <Grid item>
                                            <Stack alignItems="center" justifyContent="center" spacing={1}>
                                            <Box component={Link} to="#" >
                                            <Logo />
                                            </Box>
                                                <Typography color="secondary.main" gutterBottom variant={downMD ? 'h3' : 'h2'} style={{ marginTop:'20px' }}>
                                                Referral Portal                                                </Typography>
                                                <Typography variant="caption" fontSize="16px" textAlign={downMD ? 'center' : 'inherit'}>
                                                    Enter your credentials to continue
                                                </Typography>
                                            </Stack>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <AuthLogin loginProp={2} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Divider />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Grid item container direction="column" alignItems="center" xs={12}>
                                                <Typography
                                                    component={Link}
                                                    to="/register/"
                                                    variant="subtitle1"
                                                    sx={{ textDecoration: 'none' }}
                                                >
                                                    Don&apos;t have an account?
                                                </Typography>
                                            </Grid>
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

export default Login;
