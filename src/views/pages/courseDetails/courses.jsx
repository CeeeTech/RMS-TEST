import * as React from 'react';
import Grid from '@mui/material/Grid';
import MainCard from 'ui-component/cards/MainCard';
import { useMediaQuery, Typography, TextField, InputAdornment } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import config from '../../../config';
import LinearProgress from '@mui/material/LinearProgress';

import { alpha, styled } from '@mui/material/styles';
import { DataGrid, gridClasses } from '@mui/x-data-grid';

import { useAuthContext } from '../../../contexts/useAuthContext';
import { useLogout } from '../../../hooks/useLogout';

const ODD_OPACITY = 0.2;

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
    ['& .${gridClasses.row}.even']: {
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
                // Reset on touch devices, it doesn't add specificity
                '@media (hover: none)': {
                    backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY + theme.palette.action.selectedOpacity)
                }
            }
        }
    }
}));

export default function ViewCourses() {
    const [courseData, setCourseData] = useState([]);
    // const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const [loading, setLoading] = useState(true);

    const { user } = useAuthContext();
    const { logout } = useLogout();

    // Function to handle search
    const handleSearch = (event) => {
        const term = event.target.value.toLowerCase();
        // setSearchTerm(term);

        // Filter the courseData based on the search term
        const filteredCourses = courseData.filter((course) => course.name.toLowerCase().includes(term));
        setFilteredData(filteredCourses);
    };

    //fetch course details

    async function fetchCourseDetails() {
        try {
            const response = await fetch(config.apiUrl + 'api/courses', {
                method: 'GET',
                headers: { Authorization: `Bearer ${user.token}` }
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

            const allCourses = await response.json();
            console.log(allCourses);

            // Filter courses where status is true
            const filteredCourses = allCourses.filter((course) => course.status === true);

            // Apply transformation to each course in filteredCourses
            const formattedData = filteredCourses.map((course) => ({ id: course._id, ...course }));

            setCourseData(formattedData);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchCourseDetails();
    }, []);

    console.log(courseData);

    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    const columns = [
        { field: 'name', headerName: 'Course Name', flex: 2 },

        {
            field: 'rate',
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

        // {
        //     field: 'earning',
        //     headerName: 'Potential Earning(LKR)',
        //     flex: 1,
        //     renderCell: (params) => {
        //         const rate = params.row.rate;
        //         // Check if rate is available
        //         if (rate !== undefined && rate !== null) {
        //             // Calculate potential earning as 5% of the rate
        //             const potentialEarning = (rate * 0.05).toFixed(2) + ' LKR';
        //             return <>{potentialEarning}</>;
        //         } else {
        //             return <>Not available</>;
        //         }
        //     }
        // },

        { field: 'description', headerName: 'Description', flex: 3 }
    ];

    return (
        <>
            <MainCard>
                {loading && <LinearProgress />}
                <Grid container alignItems="center" justifyContent="space-between" sx={{ px: 3, py: 2 }}>
                    <Grid item>
                        <Typography variant="h3" component="h3">
                            Course List
                        </Typography>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                        <TextField
                            fullWidth
                            margin="normal"
                            name="course"
                            type="text"
                            SelectProps={{ native: true }}
                            defaultValue=""
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                )
                            }}
                            onChange={handleSearch}
                        />
                    </Grid>
                </Grid>
                {/* <div style={{ height: 710, width: '100%' }}>
                    <StripedDataGrid
                        rows={filteredData.length > 0 ? filteredData : courseData}
                        columns={columns}
                        getRowClassName={(params) => (params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd')}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 10 }
                            }
                        }}
                        getRowId={(row) => row._id}
                        getRowStyle={(params) => ({
                            backgroundColor: params.index % 2 === 0 ? '#fff' : '#f0f8ff'
                        })}
                        pageSizeOptions={[10, 25, 100]}
                    />
                </div> */}
                <Grid item xs={12}>
                    <div style={{ height: 710, width: '100%' }}>
                        <DataGrid
                            rows={filteredData.length > 0 ? filteredData : courseData}
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
            </MainCard>
                
        </>
    );
}
