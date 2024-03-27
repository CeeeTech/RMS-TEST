import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { Grid, Button, Paper, Container, InputBase, LinearProgress } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { gridSpacing } from 'store/constant';
import RevenueCard from 'ui-component/cards/RevenueCard';
import BlockTwoToneIcon from '@mui/icons-material/BlockTwoTone';
import config from '../../../config';
import CachedTwoToneIcon from '@mui/icons-material/CachedTwoTone';
import Hidden from '@mui/material/Hidden';

import { useAuthContext } from '../../../contexts/useAuthContext';

import MainCard from 'ui-component/cards/MainCard';
import AddIcon from '@mui/icons-material/Add';
import Chip from '@mui/material/Chip';
import HowToRegTwoToneIcon from '@mui/icons-material/HowToRegTwoTone';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SignalCellularAltTwoToneIcon from '@mui/icons-material/SignalCellularAltTwoTone';

import PaidTwoToneIcon from '@mui/icons-material/PaidTwoTone';
import CreditScoreTwoToneIcon from '@mui/icons-material/CreditScoreTwoTone';
import InsertDriveFileTwoToneIcon from '@mui/icons-material/InsertDriveFileTwoTone';

import { Typography, TextField, InputAdornment } from '@mui/material';
import { useLogout } from '../../../hooks/useLogout';

const ODD_OPACITY = 0.1;

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
    ['& .${gridClasses.row}.even']: {
        // Corrected syntax
        backgroundColor: theme.palette.grey[200],
        '&:hover, &.Mui-hovered': {
            backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
            '@media (hover: none)': {
                backgroundColor: 'transparent'
            }
        },
        '&.Mui-selected': {
            backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY + theme.palette.action.selectedOpacity),
            '&:hover, &.Mui-hovered': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    ODD_OPACITY + theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity
                ),
                '@media (hover: none)': {
                    backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY + theme.palette.action.selectedOpacity)
                }
            }
        }
    }
}));

const HeaderPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.primary[800],
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(3)
}));

const ReferralBoxPaper = styled(Paper)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    background: '#fff', // White background
    marginBottom: theme.spacing(2)
}));

const ReferralItemPaper = styled(Paper)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    backgroundColor: '#0444B0', // Blue background
    color: '#FFFFFF', // White text color
    height: '100px', // Increase the height as needed
    marginBottom: theme.spacing(2)
}));

const ActionButton = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#1976d2',
    color: '#FFFFFF', // White text color
    '&:hover': {
        backgroundColor: '#1976d2' // Darker green color on hover
    }
}));

const SearchBoxPaper = styled(Paper)(({ theme }) => ({
    //backgroundColor: theme.palette.secondary.light,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius
}));

function SamplePage() {
    // Define chip colors based on status
    const chipColors = {
        registered: 'primary',
        dropped: 'error',
        processing: 'warning',
        paid: 'success'
    };

    const { user } = useAuthContext();

    const { logout } = useLogout();
    const [referrals, setReferrals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [referralCount, setReferralCount] = useState(0);
    const [registeredReferralCount, setRegisteredReferralCount] = useState(0);

    // const referee_id = "65ddb91b6c5ed457b045e8fa"

    async function fetchReferrals() {
        try {
            const response = await fetch(config.apiUrl + 'api/referral/getReferralByReferee', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${user.token}` },
                body: JSON.stringify({ referee_id: user._id })
            });

            if (!response.ok) {
                if (response.status === 401) {
                    console.error('Unauthorized access. Logging out.');
                    logout();
                }
                if (response.status === 500) {
                    console.error('Internal Server Error.');
                    logout();
                    return;
                }
                return;
            }

            const data = await response.json();

            console.log('Referrals:', data);

            if (!Array.isArray(data.referrals)) {
                throw new Error('Data received from server does not contain a valid referrals array');
            }

            const mappedReferrals = data.referrals.map((referral) => ({
                id: referral._id,
                date: formatDate(referral.date),
                reference_number: referral.reference_number,
                student_name: referral.student_id ? referral.student_id.name : '',
                course_name: referral.course_id ? referral.course_id.name : '',
                mobile_number: referral.student_id ? referral.student_id.contact_no : '',
                potential_earning: referral.potential_earning? referral.potential_earning : 0.00,
                status: referral.ref_status_id ? referral.ref_status_id.name : ''
            }));

            setReferrals(mappedReferrals);
            return true;
        } catch (error) {
            console.error('Error fetching referrals:', error);
            return false;
        }
    }

    // function to get the referral count by referee
    async function getReferralCountByReferee() {
        try {
            const response = await fetch(config.apiUrl + 'api/referral/getReferralCountByReferee', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${user.token}` },
                body: JSON.stringify({ referee_id: user._id })
            });

            if (!response.ok) {
                if (response.status === 401) {
                    console.error('Unauthorized access. Logging out.');
                    logout();
                    return false;
                }
                if (response.status === 500) {
                    console.error('Internal Server Error.');
                    logout();
                    return false;
                }
                return false;
            }

            const countData = await response.json();
            setReferralCount(countData);
            console.log('Referral count:', countData);
            return true;
        } catch (error) {
            console.error('Error getting referral count:', error);
            return false;
        }
    }

    // function to get registered referral count by referee
    async function getRegisteredReferralCountByReferee() {
        try {
            const response = await fetch(config.apiUrl + 'api/referral/getRegisteredReferralCountByReferee', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${user.token}` },
                body: JSON.stringify({ referee_id: user._id })
            });

            if (!response.ok) {
                if (response.status === 401) {
                    console.error('Unauthorized access. Logging out.');
                    logout();
                    return false;
                }
                if (response.status === 500) {
                    console.error('Internal Server Error.');
                    logout();
                    return false;
                }
                return false;
            }

            const regCountData = await response.json();
            setRegisteredReferralCount(regCountData);
            console.log('Registered referral count:', regCountData);
            return true;
        } catch (error) {
            console.error('Error getting registered referral count:', error);
            return false;
        }
    }

    function formatDate(inputDate) {
        const date = new Date(inputDate);
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const year = date.getFullYear();
        const formattedD = `${year}-${month}-${day}`;
        return formattedD;
    }

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };
    const callAllData = async () => {
        await fetchReferrals();
        await getReferralCountByReferee();
        await getRegisteredReferralCountByReferee();
        setLoading(false);
    };
    useEffect(() => {
        callAllData();
    }, []);

    // Inside the same component
    useEffect(() => {
        console.log('user:', user);
    }, [referrals]);

    const columns = [
        { field: 'reference_number', headerName: '#', width: 90 },
        { field: 'date', headerName: 'Date', width: 120 },
        { field: 'student_name', headerName: 'Student Name', width: 185 },
        { field: 'course_name', headerName: 'Course Name', width: 260 },
        { field: 'mobile_number', headerName: 'Mobile Number', width: 150 },
        {
            field: 'potential_earning',
            headerName: 'Potential Earning(LKR)',
            flex: 1,
            valueFormatter: (params) => {
                const rate = params.value;
                if (rate !== undefined && rate !== null) {
                    return rate.toFixed(2);
                } else {
                    return 'Not available';
                }
            }
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 200,
            renderCell: (params) => (
                <Chip
                    label={params.value.charAt(0).toUpperCase() + params.value.slice(1).toLowerCase()} // Capitalize first letter
                    color={chipColors[params.value] || 'default'}
                    style={{ width: 110 }}
                />
            )
        }
    ];

    return (
        <MainCard
            title="Dashboard"
            secondary={
                <>
                    <Link to="/createNewReferralForm">
                        <Button variant="contained" endIcon={<AddIcon style={{ fontSize: '23px' }} />}>
                            Add New Refferal
                        </Button>
                    </Link>
                    <Hidden mdUp>
                        <br />
                        <Link to="/courseDetails">
                            <Button
                                color="success"
                                variant="contained"
                                style={{ marginTop: 10, color: 'white', backgroundColor: '#00954d' }}
                                endIcon={<FormatListBulletedIcon style={{ fontSize: '23px' }} />}
                            >
                                View Courses{' '}
                            </Button>
                        </Link>
                    </Hidden>
                </>
            }
        >
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item sm={6} md={4}></Grid>
                            <Grid item xs={12}></Grid>
                            <Grid
                                item
                                lg={4}
                                md={4}
                                sm={6}
                                xs={12}
                                sx={{
                                    marginTop: (theme) => ({
                                        xs: '-45px', // Styling for extra small screens
                                        sm: '0px' // Styling for small screens
                                    })
                                }}
                            >
                                <RevenueCard
                                    isLoading={loading}
                                    primary="Registration"
                                    secondary={registeredReferralCount.registeredReferralCount}
                                    iconPrimary={HowToRegTwoToneIcon}
                                    color="#04AA6D"
                                />
                            </Grid>
                            <Grid item lg={4} md={4} sm={6} xs={12}>
                                <RevenueCard
                                    isLoading={loading}
                                    primary="Processing"
                                    secondary="0"
                                    iconPrimary={CachedTwoToneIcon}
                                    color="#3887BE"
                                />
                            </Grid>
                            <Grid item lg={4} md={4} sm={6} xs={12}>
                                <RevenueCard
                                    isLoading={loading}
                                    primary="Paid (LKR)"
                                    secondary="0"
                                    iconPrimary={PaidTwoToneIcon}
                                    color="#E9B824"
                                />
                            </Grid>
                            <Grid item lg={6} md={4} sm={6} xs={12}>
                                <RevenueCard
                                    isLoading={loading}
                                    primary="Dropped"
                                    secondary="0"
                                    iconPrimary={BlockTwoToneIcon}
                                    color="#EE9322"
                                />
                            </Grid>
                            <Grid item lg={6} md={4} sm={6} xs={12}>
                                <RevenueCard
                                    primary="Referrals"
                                    secondary={referralCount.referralCount}
                                    iconPrimary={InsertDriveFileTwoToneIcon}
                                    isLoading={loading}
                                    color="#211C6A"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}></Grid>
                    <Grid container alignItems="center" justifyContent="space-between" sx={{ px: 3, py: 2 }}>
                        <Grid item>
                            <Typography variant="h3" component="h3">
                                Referral List
                            </Typography>
                        </Grid>
                        <Grid item xs={8} sm={4}>
                            <TextField
                                fullWidth
                                margin="normal"
                                type="text"
                                onChange={handleSearch}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        {loading && <LinearProgress />}
                        {/* <Grid item xs={12}>
                        <div style={{ height: 710, width: '100%' }}>
                            <DataGrid
                                rows={referrals}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: { page: 0, pageSize: 10 }
                                    }
                                }}
                                pageSizeOptions={[10, 25, 100]}
                                checkboxSelection
                                getStatusWithColor
                            />
                        </div>
                    </Grid> */}
                        <Grid item xs={12}>
                            <div style={{ height: 720, width: '100%' }}>
                                <DataGrid
                                    rows={referrals}
                                    columns={columns}
                                    rowHeight={40}
                                    initialState={{
                                        pagination: {
                                            paginationModel: { page: 0, pageSize: 14 }
                                        }
                                    }}
                                    pageSizeOptions={[10, 14, 100]}
                                    getStatusWithColor
                                />
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </MainCard>
    );
}
export default SamplePage;
