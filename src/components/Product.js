import { Grid, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';

const previewHeight = '200px';

const Product = (props) => {
    const { name, images } = props.product;
    const useStyle = makeStyles((theme) => createStyles({
        showProduct: {
            position: 'relative',
            width: '100%',
            height: `${previewHeight}`,
            borderRadius: '12px',
            // background: `url(${images[0]}) top / cover`,
            // objectFit: 'cover',
            overflow: 'hidden'
        },
        projectImg: {
            '&:hover': {
                transform: `translate(0%, calc(-100% + ${previewHeight}))`
            },
            position: 'absolute',
            zIndex: '10',
            width: '100%',
            transition: '1s ease-in-out'
        },
        imgContainer: {
            padding: '8px',
            borderRadius: '15px',
            background: 'rgba(255, 255, 255,0.15)',
            boxShadow: 'inset 0 0 0 200px rgba(255,255,255,0.08)',
            backdropFilter: 'blur(5px)'
        }
    }));
    const { showProduct, imgContainer, projectImg } = useStyle();
    return (
        <>
            <Grid item xs={12} md={4}>
                <Box className={imgContainer}>
                    <Box className={showProduct}>
                        <img className={projectImg} src={images[0]} alt="" />
                    </Box>
                    <Box sx={{ border: '1px solid white', padding: '15px' }}>
                        <Typography variant='subtitle' sx={{ fontWeight: 600 }}>
                            {name}
                        </Typography>
                        
                    </Box>
                </Box>
            </Grid>
        </>
    );
};

export default Product;