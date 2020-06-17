import React from 'react';
import {Backdrop, Button, CircularProgress, Container, Grid, Paper, Typography} from "@material-ui/core";
import {MatchService} from "../../../services";


import {makeStyles} from '@material-ui/core/styles';
import Tennis from "../tennis";
import TennisSnackBar from "../../functions/TennisSnackBar";
import {useHistory} from "react-router";

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


export default function TennisMatch({snackbar,setSnackbar}) {
    const classes = useStyles();
    const [matchConfig, setMatchConfig] = React.useState({});
    const [callingServer, setCallingServer] = React.useState(false);
    const history = useHistory();
    function submitForm() {
        setCallingServer(true);
        return MatchService.startMatch(matchConfig)
            .then(function (data) {
                setCallingServer(false);
                setSnackbar({ message: `the tennis match ${data.matchName} between ${data.playerOneName} and ${data.playerTwoName} is currently taking place`, variant: 'success' });
                history.replace(`/games`)
            })
            .catch(e => {
                setSnackbar({ message: e.message, variant: 'error' });
            });
    };

    return <Container>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper test-id="first-paper-tennis-match-config-test-id" className={classes.firstpaper}>
                    <Grid container spacing={6}>
                        <Grid item xs={8}>
                            <Typography test-id="title-tennis-match-config-test-id" variant="h4">Begin a new match</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper test-id="paper-tennis-match-config-test-id" className={classes.paper}>
                    <Tennis test-id="tennis-match-config-test-id" value={matchConfig} onChange={setMatchConfig} />
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper test-id="validation-paper-tennis-match-config-test-id" className={classes.paper}>
                    <Button test-id='button-validation-tennis-match-config-test-id' color="primary" variant="contained" onClick={submitForm} >Start match</Button>
                </Paper>
            </Grid>
            <Backdrop
                test-id='backdrop-tennis-match-config-test-id'
                className={classes.backdrop}
                open={callingServer}>
                <CircularProgress color="inherit" />
            </Backdrop >
        </Grid>
        <TennisSnackBar test-id='snackbar-start-match-test-id' message={(snackbar && snackbar.message)} variant={(snackbar && snackbar.variant)} handleClose={() => {setSnackbar({})}} />

    </Container>
}