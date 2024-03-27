import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import MainCard from 'ui-component/cards/MainCard';
import { Button, CardActions, Divider, InputAdornment, Typography, useMediaQuery,Box,FormHelperText} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DateRangeIcon from '@mui/icons-material/DateRange';
import EmailIcon from '@mui/icons-material/Email';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useEffect } from 'react';
import { useState } from 'react';
import config from '../../../config';
import { useAuthContext } from '../../../contexts/useAuthContext';
//import { useAuthContext } from '../../../context/useAuthContext';
import PersonIcon from '@mui/icons-material/Person';
import WidthFullIcon from '@mui/icons-material/WidthFull';
import * as Yup from 'yup';
import { Formik } from 'formik';
//import { useLogout } from '../../../hooks/useLogout';
import Swal from 'sweetalert2';
//import withReactContent from 'sweetalert2-react-content';
import CircularProgress from '@mui/material/CircularProgress';
import { useLogout } from '../../../hooks/useLogout';
import '../../../assets/css/swal.css';

export default function ReferralForm() {
    const theme = useTheme();
    const { user } = useAuthContext();
    const { logout } = useLogout();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    const [courses, setCourses] = useState([]);
    const [branches, setBranches] = useState([]);
    const [checked, setChecked] = useState(false);

    const date = new Date();
    const formattedDate = date.toISOString().split('T')[0];

    const [ReferralData] = useState({
        name: '',
        nic: '',
        dob: '',
        email: '',
        contact_no: '',
        address: '',
        course_name: '',
        branch_name: ''
    });

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

    const fetchCourses = async () => {
        try {
            const response = await fetch(config.apiUrl + 'api/courses', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${user.token}` }
            });

            const data = await response.json();

            if (data && data.length > 0) {
                setCourses(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    console.log(courses);

    const fetchBranches = async () => {
        try {
            const response = await fetch(config.apiUrl + 'api/branches', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${user.token}` }
            });
            const data = await response.json();
            if (data && data.length > 0) {
                setBranches(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    console.log(branches);

    useEffect(() => {
        fetchCourses();
        fetchBranches();
        console.log(formattedDate);
        console.log(user);
    }, []);

    const handleSubmit = async (values, { setSubmitting, setFieldError, setErrors, setStatus }) => {

        console.log(checked);
        
        const formData = {
            name: values.name,
            nic: values.nic,
            dob: values.dob,
            email: values.email,
            contact_no: values.contact_no,
            address: values.address,
            course_name: values.course_name,
            branch_name: values.branch_name,
            referee_id: user._id,
            comment: values.comment,
        };

        try {
            // Check for duplicate lead
            const checkDuplicate = await fetch(config.apiUrl + `api/referral/checkForDuplicate`, {
                method: 'POST',
                headers: { Authorization: `Bearer ${user.token}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({ courseName: values.course_name, branchName: values.branch_name, studentContact_no: values.contact_no })
            });
            
            if (!checkDuplicate.ok) {
                throw new Error('Error checking duplicates');
            }
            
            const duplicateReferral = await checkDuplicate.json();
            
            console.log('Check Referral', duplicateReferral.isDuplicate);
            
            if (duplicateReferral.isDuplicate) {
                console.log("Referral with the same student's contact number, course, and branch already exists.");
                // display swal error message
                Toast.fire({
                    icon: 'error',
                    title: "Referral with the same student's contact number, course, and branch already exists."
                });
                return;
            }

            // Check if student already exists by contact_no
            const checkStudent = await fetch(config.apiUrl + `api/referral/checkDuplicateStudent`, {
                method: 'POST',
                headers: { Authorization: `Bearer ${user.token}`, 'Content-Type': 'application/json' },
                body: JSON.stringify({ contact_no: values.contact_no })
            });

            if (!checkStudent.ok) {
                console.error('Error checking existing student', checkStudent.statusText);
                return;
            }

            const duplicateStudent = await checkStudent.json();

            console.log('Check referral student', duplicateStudent.isDuplicateStudent);

            // if duplicateStudent.isDuplicateStudent is true, then the student already exists
            if (duplicateStudent.isDuplicateStudent) {
                // Check if student already exists by NIC or email
                const checkLeadStudent = await fetch(config.apiUrl + `api/referral/checkDuplicateStudentLead`, {
                    method: 'POST',
                    headers: { Authorization: `Bearer ${user.token}`, 'Content-Type': 'application/json' },
                    body: JSON.stringify({ contact_no: values.contact_no })
                });

                if (!checkLeadStudent.ok) {
                    console.error('Error checking existing student', checkLeadStudent.statusText);
                    return;
                }

                const duplicateStudentLead = await checkLeadStudent.json();

                console.log('Check Student', duplicateStudentLead.isDuplicateStudent);

                // Add lead with existing student
                const addLeadResponse = await fetch(config.apiUrl + 'api/referral/addReferralWithExistingStudent', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${user.token}`
                    },
                    body: JSON.stringify({
                        ...formData,
                        student_id: duplicateStudent.student._id
                    })
                });

                if (!addLeadResponse.ok) {
                    console.error('Error adding lead with existing student:', addLeadResponse.statusText);
                    return;
                }
                console.log('Refferal added successfully!');
                // display swal success message
                Toast.fire({
                    icon: 'success',
                    title: 'Refferal added successfully!'
                });
            } else {
                // Add new referral
                const res = await fetch(config.apiUrl + 'api/referral/add-new-referral', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${user.token}` },
                    body: JSON.stringify(formData)
                });

                if (!res.ok) {
                    if (res.status === 401) {
                        console.error('Unauthorized access. Logging out.');
                        logout();
                    }
                    if (res.status === 500) {
                        console.error('Internal Server Error.');
                        logout();
                        return;
                    }
                    return;
                }

                console.log('Request complete.');
                const response = await res.json();
                console.log('Server response:', response);
                // display swal success message
                Toast.fire({
                    icon: 'success',
                    title: 'New Refferal added successfully!'
                });
            }
        } catch (error) {
            // Handle errors
            console.error('Error submitting form:', error);
            // display swal error message
            Toast.fire({
                icon: 'error',
                title: 'Error submitting form'
            });

            setFieldError('submit', error.message);
        } finally {
            // Set submitting to false
            setSubmitting(false);
        }
    };

    return (
        <>
            <MainCard title="Add New Referral">
                <Formik
                    initialValues={{
                        name: ReferralData.name || '',
                        nic: ReferralData.nic || '',
                        dob: ReferralData.dob || '',
                        email: ReferralData.email || '',
                        contact_no: ReferralData.contact_no || '',
                        address: ReferralData.address || '',
                        course_name: ReferralData.course_name || '',
                        branch_name: ReferralData.branch_name || '',
                        comment: '', // Add the comment field here
                        checked: false,
                    }}
                    validationSchema={Yup.object().shape({
                        name: Yup.string().required('Name is required'),
                        nic: Yup.string().matches(
                            /^(?:\d{9}[vVxX]|\d{12})$/,
                            'NIC should either contain 9 digits with an optional last character as a letter (v/V/x/X) or have exactly 12 digits'
                        ),
                        contact_no: Yup.string()
                            .matches(/^\+?\d{10,12}$/, 'Contact No should be 10 to 12 digits with an optional leading + sign')
                            .required('Contact No is required'),
                        email: Yup.string().email('Invalid email format'),
                        course_name: Yup.string().required('Course is required'),
                        branch_name: Yup.string().required('Branch is required'),
                        comment: Yup.string().max(255, 'Maximum 255 characters allowed'),
                    })}                    
                    onSubmit={handleSubmit}
                >
                    {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                        <form onSubmit={handleSubmit}>
                            <Grid container direction="column" justifyContent="center">
                                <Grid container sx={{ p: 3 }} style={{ marginTop: '-50px' }} spacing={matchDownSM ? 0 : 2}>
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="h5" component="h5">
                                            Name
                                            <span style={{color:'red',marginLeft:3}}>*</span>

                                        </Typography>
                                        <TextField
                                            fullWidth
                                            margin="normal"
                                            name="name"
                                            type="text"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                            error={Boolean(touched.name && errors.name)}
                                            helperText={touched.name && errors.name}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <PersonIcon />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="h5" component="h5">
                                            NIC
                                            <span style={{color:'red',marginLeft:3}}>*</span>

                                        </Typography>
                                        <TextField
                                            fullWidth
                                            margin="normal"
                                            name="nic"
                                            type="text"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.nic}
                                            error={Boolean(touched.nic && errors.nic)}
                                            helperText={touched.nic && errors.nic}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <WidthFullIcon />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="h5" component="h5">
                                            Date of birth

                                        </Typography>
                                        <TextField
                                            fullWidth
                                            // label="First Name"
                                            margin="normal"
                                            name="dob"
                                            type="date"
                                            onChange={handleChange}
                                            value={values.dob}
                                            onBlur={handleBlur}
                                            error={Boolean(touched.dob && errors.dob)}
                                            helperText={touched.dob && errors.dob}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <DateRangeIcon />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="h5" component="h5">
                                            Email

                                        </Typography>
                                        <TextField
                                            fullWidth
                                            // label="First Name"
                                            margin="normal"
                                            name="email"
                                            type="email"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.email}
                                            error={Boolean(touched.email && errors.email)}
                                            helperText={touched.email && errors.email}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <EmailIcon />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="h5" component="h5">
                                            Contact Number
                                            <span style={{color:'red',marginLeft:3}}>*</span>

                                        </Typography>
                                        <TextField
                                            fullWidth
                                            // label="First Name"
                                            margin="normal"
                                            name="contact_no"
                                            type="text"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.contact_no}
                                            error={Boolean(touched.contact_no && errors.contact_no)}
                                            helperText={touched.contact_no && errors.contact_no}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <CallIcon />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="h5" component="h5">
                                            Select Branch
                                            <span style={{color:'red',marginLeft:3}}>*</span>

                                        </Typography>
                                        <TextField
                                            fullWidth
                                            margin="normal"
                                            name="branch_name"
                                            select
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            SelectProps={{ native: true }}
                                            value={values.branch_name}
                                            error={Boolean(touched.branch_name && errors.branch_name)}
                                            helperText={touched.branch_name && errors.branch_name}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <AssignmentIcon />
                                                    </InputAdornment>
                                                )
                                            }}
                                        >
                                            <option value="" disabled>
                                                Select branch
                                                
                                            </option>
                                            {branches.length > 0 &&
                                                branches
                                                    .filter((branch) => branch.name === 'Main Branch - Padukka')
                                                    .map((branch) => (
                                                        <option key={branch._id} value={branch.name}>
                                                            {branch.name}
                                                        </option>
                                                    ))}
                                        </TextField>
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="h5" component="h5">
                                            Select Course
                                            <span style={{color:'red',marginLeft:3}}>*</span>

                                        </Typography>
                                        <TextField
                                            fullWidth
                                            // label="First Name"
                                            margin="normal"
                                            name="course_name"
                                            select
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            SelectProps={{ native: true }}
                                            value={values.course_name}
                                            error={Boolean(touched.course_name && errors.course_name)}
                                            helperText={touched.course_name && errors.course_name}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <AssignmentIcon />
                                                    </InputAdornment>
                                                )
                                            }}
                                        >
                                            <option value="" disabled>
                                                Select course
                                            </option>
                                            {courses.map((course) => (
                                                <option key={course._id} value={course.name}>
                                                    {course.name}
                                                </option>
                                            ))}
                                        </TextField>
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="h5" component="h5">
                                            Comments
                                        </Typography>
                                        <TextField
                                            multiline
                                            rows={2}
                                            fullWidth
                                            margin="normal"
                                            name="comment"
                                            placeholder="Enter your comment here..."
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.comment}
                                            error={Boolean(touched.comment && errors.comment)}
                                            helperText={touched.comment && errors.comment}
                                            InputProps={{
                                                style: {
                                                    borderRadius: '8px',
                                                    resize: 'none',
                                                    boxSizing: 'border-box',
                                                    outline: 'none',
                                                    overflowY: 'auto' // Auto adjust the height and enable scrolling
                                                }
                                            }}
                                        />
                                    </Grid>

                                    <Grid container alignItems="center" justifyContent="flex-end">
                                        <Grid item>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={values.checked}
                                                        onChange={(e) => {
                                                            handleChange(e);
                                                            setChecked('checked', e.target.checked);
                                                        }}
                                                        name="checked"
                                                        color="primary"
                                                    />
                                                }
                                                label={
                                                    <Typography variant="subtitle1">
                                                        I would like the student counsellor to contact the student
                                                        <span style={{ color: 'red', marginLeft: 3 }}>*</span>
                                                    </Typography>
                                                }
                                                error={Boolean(touched.checked && errors.checked)}
                                                helperText={touched.checked && errors.checked}
                                            />
                                        </Grid>
                                    </Grid>

                                    {errors.submit && (
                                        <Box sx={{ mt: 3 }}>
                                            <FormHelperText error>{errors.submit}</FormHelperText>
                                        </Box>
                                    )}
                                </Grid>
                                <Divider sx={{ mt: -3, mb: 2 }} />
                                <CardActions sx={{ justifyContent: 'flex-end' }}>
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        sx={{ mt: -3}}
                                        disabled={isSubmitting}
                                        endIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : null}
                                    >
                                        Add Referral
                                    </Button>
                                </CardActions>
                            </Grid>
                        </form>
                    )}
                </Formik>
            </MainCard>
        </>
    );
}
