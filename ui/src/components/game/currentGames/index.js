import React from 'react';
import {Container, Grid, Paper, Typography} from "@material-ui/core";


import {makeStyles} from '@material-ui/core/styles';
import TennisSnackBar from "../../functions/TennisSnackBar";
import GameData from "../gameData";
import MatchResult from "../matchResult";
import {Route} from "react-router-dom";

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


export default function CurrentGames({matchResult, data, players,snackbar,setSnackbar}) {
    const classes = useStyles();
    return <Container>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper test-id="first-paper-current-games-test-id" className={classes.firstpaper}>
                    <Grid container spacing={6}>
                        <Grid item xs={8}>
                            <Typography test-id="title-current-games-test-id-test-id" variant="h4">Games playing</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper test-id="paper-tennis-match-config-test-id" className={classes.paper}>
                    <GameData test-id="game-test-id" players={players} data={data}  />
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <MatchResult matchResult ={matchResult}/>
            </Grid>

        </Grid>
        <TennisSnackBar test-id='snackbar-game-test-id' message={(snackbar && snackbar.message)} variant={(snackbar && snackbar.variant)} handleClose={() => {setSnackbar({})}} />

    </Container>
}