import React from "react";
import { 
  HashRouter as Router, 
  Route, 
  Switch, 
  NavLink
} from "react-router-dom";

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Home from "../Pages/Home.js";
import About from "../Pages/About.js";
import Upload from "../Pages/Upload.js";
import Results from "../Pages/Results.js";

const styles = theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
});

const routing = (
  <Router>
    <div className="Router">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/upload" component={Upload} />
        <Route path="/results" component={Results} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  </Router>
);

class Routing extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Box width="75%" maxWidth={1000}>
          <Paper className={classes.root}>
            {routing}
          </Paper>
        </Box>
      </Grid>
    );
  }
}


export default withStyles(styles)(Routing);
