import { Button, Chip, Grid, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Flip from 'react-reveal/Flip';
import Title from './Title';

const ProjectDetails = () => {
    const { id } = useParams();
    const [totalProduct, setTotalProduct] = useState([]);
    const [product, setProduct] = useState({});
    const [currentImg, setCurrentImg] = useState('');
    useEffect(() => {
        fetch('/projectData.json')
            .then(res => res.json())
            .then(data => {
                setTotalProduct(data);
            })
    }, [])
    useEffect(() => {
        const filteredData = totalProduct.find(pro => pro.id === parseInt(id));
        setProduct(filteredData);
    }, [totalProduct, id])
    useEffect(() => {
        setCurrentImg(product?.images && product?.images[0]);
    }, [product])
    const currentImgHandler = (imgPath) => {
        setCurrentImg(imgPath);
    }
    const useStyle = makeStyles((theme) => createStyles({
        currentImgStyle: {
            '&:hover': {
                transform: `translate(0%, calc(-100% + 300px))`
            },
            position: 'absolute',
            zIndex: '10',
            width: '100%',
            transition: '1s ease-in-out'
        }
    }));
    const { currentImgStyle } = useStyle();
    return (
        <Box className="container" sx={{ pt: { lg: 5, xs: 7 }, px: { lg: 7, xs: 4 } }}>
            <Title
                title={product?.name}
                subtitle="PROJECT"
                team_project={product?.team_project}
            />
            <Box>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ width: '100%', height: '300px', padding: '8px', mb: 1, border: '1px solid white', overflow: 'hidden', borderRadius: 2 }}>
                            <Box sx={{ position: 'relative', height: '100%', overflow: 'hidden' }}>
                                <img className={currentImgStyle} src={currentImg} alt="" />
                            </Box>
                        </Box>
                        <Grid container spacing={2}>
                            {
                                product?.images?.map((img, index) => {
                                    return (
                                        <Grid item xs={2} key={index}>
                                            <Box onClick={() => currentImgHandler(img)} sx={{ height: '60px', overflow: 'hidden' }}>
                                                <Flip left>
                                                    <img style={{ width: '100%' }} src={img} alt="" />
                                                </Flip>
                                            </Box>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Typography variant="h6" sx={{ mb: 2 }}>Features</Typography>
                            <ul>
                                {
                                    product?.features?.map((item, index) => (
                                        <li key={index} style={{ marginLeft: '20px' }}>
                                            <Typography>
                                                {item}
                                            </Typography>
                                        </li>
                                    ))
                                }
                            </ul>
                            <Typography variant="h6" sx={{ my: 2 }}>Technologies</Typography>
                            {
                                product?.technology &&
                                product?.technology.map(tech =>
                                    <Chip key={tech} sx={{ mr: 1, my: 1 }} label={tech} variant="outlined" />
                                )
                            }
                        </Box>
                        <Box sx={{ my: 3 }}>
                            {product?.sites &&
                                Object.keys(product?.sites).map(site => {
                                    return (
                                        <span key={site}>
                                            {
                                                product?.sites[site] && <Button variant="contained" sx={{ mr: 2 }}><a style={{ color: 'inherit', textDecoration: 'none' }} href={product?.sites[site]} target="_blank" rel="noopener noreferrer">{site}</a></Button>
                                            }
                                        </span>
                                    )
                                })
                            }
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default ProjectDetails;