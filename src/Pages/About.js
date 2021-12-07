import { Button, Container, Grid, LinearProgress, linearProgressClasses, Typography } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import { Box, height, lineHeight } from '@mui/system';
import { styled } from '@mui/material/styles';
import React from 'react';
import Title from '../components/Title';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { createStyles, makeStyles } from '@mui/styles';
import heroDP from '../images/hero2.jpg';
const useStyle = makeStyles((theme) => createStyles({
    hero2: {
        background: `url(${heroDP}) center center / cover`,
        // objectFit: 'cover',
        width: '100%',
        height: '100vh'
    },
    infoList: {
        display: 'flex',
        alignItems: 'center',
        lineHeight: '50px'
    },
    infoSpan: {
        fontWeight: '500',
        display: 'inline-block',
        minWidth: '130px'
    },
    whatIdoBox: {
        padding: '16px',
        border: '1px solid white',
        borderRadius: '5px'
    }
}));
const About = () => {
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
    }));

    const { infoList, infoSpan, whatIdoBox } = useStyle();
    return (
        <Box id="about" className="container" sx={{ pt: { lg: 5, xs: 7 }, px: { lg: 7, xs: 4 } }}>
            <Title
                title="ABOUT ME"
                subtitle="BIOGRAPHY"
            />
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography variant="h5" sx={{ mb: 3 }}>
                            PERSONAL INFOS
                        </Typography>
                        <ul>
                            <div className={infoList}>
                                <span></span>
                                <span className={infoSpan}>Email :</span>
                                <span>ibuhossain3@gmail.com</span>
                            </div>
                            <div className={infoList}>
                                <span></span>
                                <span className={infoSpan}>Degree :</span>
                                <span>Bechalor of Science</span>
                            </div>
                            <div className={infoList}>
                                <span></span>
                                <span className={infoSpan}>Nationality :</span>
                                <span>Bangladeshi</span>
                            </div>
                            <div className={infoList}>
                                <span></span>
                                <span className={infoSpan}>Languages :</span>
                                <span>Bengali, English</span>
                            </div>
                            <div className={infoList}>
                                <span></span>
                                <span className={infoSpan}>Freelance :</span>
                                <span>Available</span>
                            </div>
                        </ul>
                    </Box>
                    <a className="hero-btn" target="_blank" href="https://drive.google.com/file/d/1cVVt57FXd3bKVXZyzUltwNDNS9PcbHHz/view?usp=sharing">
                        <Typography variant="button">
                            Download Resume
                        </Typography>
                    </a>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography variant="h5" sx={{ mb: 3 }}>
                            WHAT I DO
                        </Typography>
                        <Grid container spacing={2} columns={{ xs: 4, md: 6 }} sx={{ flexDirection: { md: 'column' } }}>
                            <Grid item xs={4} md={3}>
                                <Box className={whatIdoBox}>
                                    <Typography variant="h6">
                                        Web development
                                    </Typography>
                                    <Typography variant="body">
                                        I can create good-looking sites by using HTML, CSS, JavaScript, React
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={4} md={3}>
                                <Box className={whatIdoBox}>
                                    <Typography variant="h6">
                                        Responsive sites
                                    </Typography>
                                    <Typography variant="body">
                                        I can create responsive sites by Bootstrap, Tailwind,Material UI, Vanilla CSS
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography sx={{ fontWeight: '600' }}>
                        HTML
                    </Typography>
                    <BorderLinearProgress variant="determinate" value={95} />
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ fontWeight: '600' }}>
                        CSS
                    </Typography>
                    <BorderLinearProgress variant="determinate" value={90} />
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ fontWeight: '600' }}>
                        Bootstrap
                    </Typography>
                    <BorderLinearProgress variant="determinate" value={90} />
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ fontWeight: '600' }}>
                        JavaScript
                    </Typography>
                    <BorderLinearProgress variant="determinate" value={55} />
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ fontWeight: '600' }}>
                        React
                    </Typography>
                    <BorderLinearProgress variant="determinate" value={50} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default About;