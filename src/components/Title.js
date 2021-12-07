import { Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import React from 'react';

const useStyle = makeStyles((theme) => createStyles({
    textField: {
        margin: '50px auto',
        textAlign: 'center',
        marginBottom: '45px'
    }
}));

const Title = ({ title, subtitle }) => {
    const { textField } = useStyle();
    return (
        <div className={textField}>
            <Typography>
                {subtitle}
            </Typography>
            <Typography variant="h4">
                {title}
            </Typography>
        </div>
    );
};

export default Title;