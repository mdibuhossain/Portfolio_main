import { Grid } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';

const Product = (props) => {
    const { name, images } = props.product;
    const useStyle = makeStyles((theme) => createStyles({
        showProduct: {
            width: '100%',
            height: '350px',
            borderRadius: '12px',
            // background: `url(${images[0]}) top / cover`,
            // objectFit: 'cover',
            overflow: 'hidden'
        },
        imgContainer: {
            padding: '8px',
            borderRadius: '15px',
            background: 'rgba(230, 237, 244,0.6)',
        }
    }));
    const { showProduct, imgContainer } = useStyle();
    return (
        <>
            <Grid item xs={12} md={4}>
                <Box className={imgContainer}>
                    <Box className={showProduct}>
                        <img style={{ width: "100%" }} src={images[0]} alt="" />
                    </Box>
                </Box>
            </Grid>
        </>
    );
};

export default Product;