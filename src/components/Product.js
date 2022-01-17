import { Grid, Typography, Button, Chip } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom'

const previewHeight = '200px';

const Product = (props) => {
    const { name, images, categories, sites, id, team_project } = props.product;
    const navigate = useNavigate();
    const visitProject = (id) => {
        navigate(`/portfolio/${id}`);
    }


    const useStyle = makeStyles((theme) => createStyles({
        showProduct: {
            position: 'relative',
            width: '100%',
            height: `${previewHeight}`,
            borderRadius: '12px',
            // background: `url(${images[0]}) top / cover`,
            // objectFit: 'cover',
            overflow: 'hidden',
            cursor: 'pointer'
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
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };
    const { showProduct, imgContainer, projectImg } = useStyle();
    return (
        <>
            <Grid item xs={12} md={4}>
                <Zoom>
                    <Box className={imgContainer}>
                        <Box onClick={() => visitProject(id)} className={showProduct}>
                            <img className={projectImg} src={images[0]} alt="" />
                        </Box>
                        <Box sx={{ padding: '15px' }}>
                            <Typography variant='h6' sx={{ fontWeight: 600 }}>
                                {name} {team_project && <Chip sx={{ fontWeight: 400 }} label="Team project" color="success" size="small" />}
                            </Typography>
                            <Box>
                                {
                                    categories.map(tag => {
                                        return (
                                            <Chip key={tag} sx={{ mr: 1, my: 1 }} label={tag} variant="outlined" onClick={handleClick} />
                                        )
                                    })
                                }
                            </Box>
                            <Box>
                                {
                                    Object.keys(sites).map(site => {
                                        return (
                                            <span key={site}>
                                                {
                                                    sites[site] && <Button variant="text"><a style={{ color: 'inherit', textDecoration: 'none' }} href={sites[site]} target="_blank" rel="noopener noreferrer">{site}</a></Button>
                                                }
                                            </span>
                                        )
                                    })
                                }
                            </Box>
                        </Box>
                    </Box>
                </Zoom>
            </Grid>
        </>
    );
};

export default Product;