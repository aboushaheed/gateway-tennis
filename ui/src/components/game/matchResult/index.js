import React from 'react';
import {Container, Grid, Paper, Typography} from "@material-ui/core";


import {makeStyles} from '@material-ui/core/styles';
import TennisSnackBar from "../../functions/TennisSnackBar";

const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    firstpaper: {
        marginTop: 13,
        marginBottom: theme.spacing(0.1),
        padding: theme.spacing(4)
    },
    paper: {
        padding: theme.spacing(4),
        marginTop: theme.spacing(0.1),
        marginBottom: theme.spacing(0.1)
    }
}));


export default function MatchResult({matchResult}) {
    const classes = useStyles();
    return <Container>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper test-id="first-paper-match-result-test-id" className={classes.firstpaper}>
                    <Grid container spacing={6}>
                        <Grid item xs={8}>
                            <Typography test-id="title-match-result-test-id-test-id" variant="h4">Match result</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper test-id="paper-tennis-match-config-test-id" className={classes.paper}>
                    { (matchResult) && (matchResult.matchName  + " " +   matchResult.winner) }
                </Paper>
            </Grid>

        </Grid>

    </Container>
}