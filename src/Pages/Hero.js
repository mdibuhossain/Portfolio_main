import React from 'react';
import Particle from '../components/Particle';
import Typical from 'react-typical';
import { Box } from '@mui/system';
import { Collapse, createStyles, Typography, Zoom } from '@mui/material';
import { makeStyles } from '@mui/styles';
import bg from '../images/bg2.png';
import hero from '../images/hero.jpg';
import { Parallax } from 'react-parallax';

const useStyle = makeStyles((theme) => createStyles({
    imgContainer: {
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: `url(${hero}) center center / cover`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto 30px'
    },
    heroContainer: {
        background: `url(${bg}) center center / cover fixed`,
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
    }
}));

const Hero = () => {
    const { imgContainer, heroContainer } = useStyle();
    return (
        <Box id="top" className={heroContainer}>
            <Parallax>
                <Particle />
            </Parallax>
            <Box sx={{ textAlign: 'center', position: 'relative', zIndex: '1000' }}>
                <Zoom in='true'>
                    <Box className={imgContainer}>
                        {/* <img style={{ width: '220px', height: '220px', borderRadius: '50%' }} src="https://mdibuhossain.web.app/img/hero3.jpg" alt="" /> */}
                    </Box>
                </Zoom>
                <Typography variant="h4" sx={{ fontWeight: 600, color: 'white' }}>
                    Ibrahim <span style={{ color: 'rgb(132, 193, 255)' }}>Hossain</span>
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 500, color: 'white' }}>
                    I'm a {' '}
                    <Typical
                        steps={['Web developer', 2000, 'React developer ⚛️', 1000]}
                        loop={Infinity}
                        wrapper="span"
                    />
                </Typography>
            </Box>
        </Box>
    );
};

export default Hero;