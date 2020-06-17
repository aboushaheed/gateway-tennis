import React from 'react';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8b4728',
    },
    secondary: {
      main: 'rgba(129,141,28,0.81)',
    },
  },
});

export default function TennisTheme(props) {
  return (
      <ThemeProvider theme={theme}>
        {props.children}
      </ThemeProvider>
  )
}