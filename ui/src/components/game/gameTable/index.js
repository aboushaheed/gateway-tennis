import React from 'react';
import {Grid, Paper, Typography,Container, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {deepOrange} from "@material-ui/core/colors";
import {useHistory} from "react-router";

const useStyles = makeStyles(theme => ({
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    table: {
        minWidth: 650,
    },
}));
export default function GameTable({ data, players }) {
    const history = useHistory();
    const classes = useStyles();
    return (
        <Container>
        <Grid container spacing={1}>
            {

                (data.type === "com.tennis.kata.match.hasWinner") && (
                    history.replace("/result")
                )

            }
        {
        (data.game) && (!data.game.winner) && (
            <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Player name</TableCell>
                            <TableCell align="right">Scores</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(data.game.scoreBoard) && (
                            players.map((row) => (
                                <TableRow key={row}>
                                    <TableCell align="right">{row}</TableCell>
                                    <TableCell align="right">

                                        {data.game.scoreBoard[row].toString()}

                                    </TableCell>
                                </TableRow>
                            ))
                        )
                        }


                    </TableBody>
                </Table>
            </TableContainer>
        )
        }
            {(data.game) && (data.game.winner) && (data.game.scoreBoard) && (
                <Grid  spacing={2}>
                    <Grid item>
                        <Typography>The winner of this game is * {data.game.winner.name} * </Typography>
                        <Typography>Final score was  : </Typography>
                        <Typography> {players.map(p => (
                            <Typography> {p} :  {data.game.scoreBoard[p].toString()}</Typography>
                            ))}</Typography>
                    </Grid>
                </Grid>
            )
            }
        </Grid>
        </Container>
    )
}