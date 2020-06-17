import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TennisTheme from "./TennisTheme";
import './global.css';

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import TennisMatch from "../game/tennisMatch";
import Home from "../home";
import useWebSocket from "../../useWebSocket";
import CurrentGames from "../game/currentGames";
import MatchResult from "../game/matchResult";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0.1
  },
  titleText: {
    textDecoration: 'none',
    color: "inherit"
  },
  offset: {
    ...theme.mixins.toolbar,
    flexGrow: 1
  },
  logo: {
    height: 40,
    padding: "10px 40px"
  },
  '@global': {
    body: {
      background: `url(${"/background.jpg"})`,
    },
  },
}));

export default function App() {

  const classes = useStyles();
  const [snackbar, setSnackbar] = React.useState({});
  const { data, players, matchResult} = useWebSocket();

  return (
    <TennisTheme>
      <Router>
        <AppBar position="fixed">
          <Toolbar>
            <Link to="/" className={classes.titleText} ><img src="/logo.png" className={classes.logo} alt="Tennis" /></Link>
            <Typography variant="h6" className={classes.title}>
              <Link to="/" className={classes.titleText} >Tennis Game Simulator</Link>
            </Typography>
            <Button component={Link} to="/matchs" color="inherit">
              Match
            </Button>
          </Toolbar>
        </AppBar>

        <Box className={classes.offset}/>
        <Switch>
          <Route path="/matchs">
            <TennisMatch snackbar={snackbar} setSnackbar={setSnackbar}/>
          </Route>
          <Route path="/games">
            <CurrentGames matchResult = {matchResult} players ={players} data={data} snackbar={snackbar} setSnackbar={setSnackbar}/>
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
      </Router>
    </TennisTheme>
  );
}
