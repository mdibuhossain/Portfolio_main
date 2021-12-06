import { Container, Grid, LinearProgress, linearProgressClasses, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import React from 'react';

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

    return (
        <Box id="about" className="container" sx={{ pt: { lg: 5, xs: 7 }, px: { lg: 7, xs: 4 } }}>
            about
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography>
                        HTML
                    </Typography>
                    <BorderLinearProgress variant="determinate" value={95} />
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        CSS
                    </Typography>
                    <BorderLinearProgress variant="determinate" value={90} />
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        Bootstrap
                    </Typography>
                    <BorderLinearProgress variant="determinate" value={90} />
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        JavaScript
                    </Typography>
                    <BorderLinearProgress variant="determinate" value={55} />
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        React
                    </Typography>
                    <BorderLinearProgress variant="determinate" value={50} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default About;