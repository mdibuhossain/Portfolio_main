import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllProjects } from '../projectJS';
import Title from './Title';

const ProjectDetails = () => {
    const { id } = useParams();
    const [totalProduct, setTotalProduct] = useState([]);
    const [product, setProduct] = useState({});
    const [currentImg, setCurrentImg] = useState('');
    useEffect(() => {
        fetch('./projectData.json')
            .then(res => res.json())
            .then(data => {
                setTotalProduct(data);
            })
    }, [])
    useEffect(() => {
        const filteredData = totalProduct.find(pro => pro.id === parseInt(id));
        setProduct(filteredData);
    }, [totalProduct])
    useEffect(() => {
        setCurrentImg(product?.images && product?.images[0]);
    }, [product])
    const currentImgHandler = (imgPath) => {
        setCurrentImg(imgPath);
    }
    return (
        <Box className="container" sx={{ pt: { lg: 5, xs: 7 }, px: { lg: 7, xs: 4 } }}>
            <Title
                title={product?.name}
                subtitle="PROJECT"
            />
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ width: '100%', height: '280px', padding: '8px', mb: 1, border: '1px solid white', overflow: 'hidden', borderRadius: 2 }}>
                            <Box sx={{ height: '100%', overflow: 'hidden' }}>
                                <img style={{ width: '100%' }} src={currentImg} alt="" />
                            </Box>
                        </Box>
                        <Grid container spacing={2}>
                            {
                                product?.images?.map(img => {
                                    return (
                                        <Grid item xs={2} key={img}>
                                            <Box onClick={() => currentImgHandler(img)} sx={{ height: '60px', overflow: 'hidden' }}>
                                                <img style={{ width: '100%' }} src={img} alt="" />
                                            </Box>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>

                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default ProjectDetails;