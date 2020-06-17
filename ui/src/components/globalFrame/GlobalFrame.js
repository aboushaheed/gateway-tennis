import React from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: 12,
        padding: theme.spacing(2)
    }
}));

export default function GlobalFrame(props) {
    const classes = useStyles();

    return (
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            {props.children}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
    );

};