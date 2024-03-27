import { useTheme } from '@mui/material/styles';
import { Box, Hidden } from '@mui/material';
import { Link } from 'react-router-dom';
import LogoSection from '../LogoSection';
import ProfileSection from './ProfileSection';

// Separate component for Dashboard Link
const DashboardLink = () => {
    return (
        <Hidden mdDown>
            <Link
                to="/dashboard/default"
                style={{
                    textDecoration: 'none',
                    marginLeft: '40px',
                    marginRight: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '2px',
                    fontSize: '2rem',
                    color: 'white',
                    marginBottom: '10px'

                }}
            >
                <span style={{ verticalAlign: 'middle', fontSize: '17.5px' }}>Dashboard</span>
            </Link>
        </Hidden>
    );
};

// Separate component for Courses Link
const CoursesLink = () => {
    return (
        <Hidden mdDown>
            <Link
                to="/courseDetails"
                style={{
                    textDecoration: 'none',
                    marginLeft: '8px',
                    marginRight: '8px',
                    marginTop: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '2rem',
                    color: 'white',
                    marginBottom: '10px'
                }}
            >
                <span style={{ verticalAlign: 'middle', fontSize: '17.5px' }}>Courses</span>
            </Link>
        </Hidden>
    );
};

const Header = () => {
    const theme = useTheme();

    return (
        <>
            {/* logo, dashboard link & courses link */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%', 
                    maxWidth: 1280,
                    marginX: 'auto',
                    paddingX: 2,
                    [theme.breakpoints.down('md')]: {
                        paddingX: 1
                    }
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 2,   }}>
                    <LogoSection />
                    <DashboardLink />
                    <CoursesLink />
                </Box>
            </Box>

            {/* profile section */}
            <ProfileSection />
        </>
    );
};

export default Header;
