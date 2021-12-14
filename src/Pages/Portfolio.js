import { Grid, Paper, Tab, Tabs } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { getAllProjects } from '../projectJS';
import Product from '../components/Product';
import Title from '../components/Title';
import PageTitle from '../components/PageTitle';

const Portfolio = () => {
    const [products, setProducts] = useState([]);
    const [finalProducts, setFinalProducts] = useState([]);

    useEffect(() => {
        fetch('./projectData.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setFinalProducts(data);
            })
    }, [])


    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        const query = (event.target.name);
        setValue(newValue);
        const filterProduct = products.filter(product => product?.categories?.includes(query));
        setFinalProducts(filterProduct);
    };
    console.log(finalProducts);
    return (
        <Box id="portfolio" className="container" sx={{ pt: { lg: 5, xs: 7 }, px: { lg: 7, xs: 4 } }}>
            <PageTitle title="Portfolio"/>
            <Title
                title="FEATURED WORKS"
                subtitle="PORTFOLIO"
            />
            <Box sx={{ my: 3 }}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab name="JavaScript" label="All" sx={{ color: 'white', fontWeight: '600' }} />
                    <Tab name="NodeJS" label="NodeJS" sx={{ color: 'white', fontWeight: '600' }} />
                    <Tab name="ReactJS" label="ReactJS" sx={{ color: 'white', fontWeight: '600' }} />
                </Tabs>
            </Box>
            <Box>
                <Grid container spacing={3}>
                    {
                        finalProducts.map(product => {
                            return (
                                <Product
                                    key={product.name}
                                    product={product}
                                />
                            )
                        })
                    }
                </Grid>
            </Box>
        </Box >
    );
};

export default Portfolio;