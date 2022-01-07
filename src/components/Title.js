import { Chip, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import React from 'react';

const useStyle = makeStyles((theme) => createStyles({
    textField: {
        margin: '50px auto',
        textAlign: 'center',
        marginBottom: '45px'
    }
}));

const Title = ({ title, subtitle, team_project }) => {
    const { textField } = useStyle();
    return (
        <div className={textField}>
            <Typography>
                {subtitle}
            </Typography>
            <Typography variant="h4">
                {title}
            </Typography>
            {team_project && <Chip label="Team project" color="success" size="small" sx={{ mt: 1 }} />}
        </div>
    );
};

export default Title;