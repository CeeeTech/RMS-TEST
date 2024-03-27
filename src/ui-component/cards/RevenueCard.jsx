import PropTypes from 'prop-types';

// material-ui
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

// =============================|| REVENUE CARD ||============================= //

const RevenueCard = ({ primary, secondary, content, iconPrimary, color,isLoading }) => {
    const IconPrimary = iconPrimary;
    const primaryIcon = iconPrimary ? <IconPrimary fontSize="large" /> : null;

    return (
        <Card sx={{ bgcolor: color, position: 'relative', color: 'background.default', padding: '2px' }}>
            <CardContent>
                <Typography
                    variant="body2"
                    sx={{
                        position: 'absolute',
                        right: 13,
                        top: { xs: 22, md: 8 },
                        color: 'background.default',
                        '&> svg': { width: { xs: 80, md: 100 }, height: { xs: 80, md: 100 }, opacity: '0.5' }
                    }}
                >
                    {primaryIcon}
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography variant="h5" color="inherit">
                            {primary}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                    {  isLoading? (<CircularProgress size={30} color="success" style={{color:'white',fontSize:'2px'}} />):(
                        <Typography variant="h3" color="inherit">
                        {secondary}
                    </Typography>
                    ) }
                        
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle2" color="inherit">
                            {content}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

RevenueCard.propTypes = {
    primary: PropTypes.string,
    secondary: PropTypes.string,
    content: PropTypes.string,
    iconPrimary: PropTypes.object,
    color: PropTypes.string
};

export default RevenueCard;
