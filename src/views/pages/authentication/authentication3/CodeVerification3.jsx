import { Link } from 'react-router-dom';

// material-ui
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import AnimateButton from 'ui-component/extended/AnimateButton';
import AuthCodeVerification from '../auth-forms/AuthCodeVerification';
import AuthFooter from 'ui-component/cards/AuthFooter';

// assets
import mainLogo from '../../../../assets/images/sltc-logo.png';

// ===========================|| AUTH3 - CODE VERIFICATION ||=========================== //

const CodeVerification = () => {
    const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

    return (
        <AuthWrapper1>
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh', backgroundColor: '#001d4f' }}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <AuthCardWrapper>
                                <Grid container spacing={2} alignItems="center" justifyContent="center">
                                    <Grid item sx={{ mb: 3 }}>
                                        <Link to="#" aria-label="logo">
                                            <img src={mainLogo} width={'200px'} alt="SLTC Logo" />
                                        </Link>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            direction={downMD ? 'column-reverse' : 'row'}
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Grid item>
                                                <Stack alignItems="center" justifyContent="center" spacing={1}>
                                                    <Typography color="secondary.main" gutterBottom variant={downMD ? 'h3' : 'h2'}>
                                                        Enter Verification Code
                                                    </Typography>
                                                    <Typography variant="subtitle1" fontSize="1rem">
                                                        We send you on massages.
                                                    </Typography>
                                                    <Typography
                                                        variant="caption"
                                                        fontSize="0.875rem"
                                                        textAlign={downMD ? 'center' : 'inherit'}
                                                    >
                                                        We’ve send you code on jone.+947********
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <AuthCodeVerification />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid item container direction="column" alignItems="center" xs={12}>
                                            <Typography
                                                component={Link}
                                                to="#"
                                                variant="subtitle1"
                                                sx={{ textDecoration: 'none' }}
                                                textAlign={downMD ? 'center' : 'inherit'}
                                            >
                                                Did not receive the message?
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <AnimateButton>
                                            <Button
                                                disableElevation
                                                fullWidth
                                                size="large"
                                                type="submit"
                                                variant="outlined"
                                                color="secondary"
                                            >
                                                Resend Code
                                            </Button>
                                        </AnimateButton>
                                    </Grid>
                                </Grid>
                            </AuthCardWrapper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
                    <AuthFooter />
                </Grid>
            </Grid>
        </AuthWrapper1>
    );
};

export default CodeVerification;
