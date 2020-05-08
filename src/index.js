import React from 'react';
import ReactDOM from 'react-dom';
import './_index.scss';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from './Home';


const theme = createMuiTheme({
  palette: {
    primary: { main: "#009688" },
    secondary: { main: "#004d40" },
    type: "dark"
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <React.Fragment>
      <CssBaseline />
        <Home />
    </React.Fragment>
  </MuiThemeProvider>,
  document.getElementById('root')
);