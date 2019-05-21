import React,{ Fragment, Component } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import { withStyles, Tabs, Tab } from "@material-ui/core"

import ControlledExpansionPanels from "../src/components/Footer.jsx"

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Material-UI
      </MuiLink>
      {' team.'}
    </Typography>
  );
}

class Index extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Fragment>
        <div className={classes.root}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
          >
            <Tab
              to="/"
              disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="FREEWORKS"
            />
            <Tab
              disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Servise"
            />
            <Tab
              disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Company"
            />
            <Tab
              disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Design"
            />
          </Tabs>
        </div>
        <Container maxWidth="sm">
          {value === 0 && <h2> Freeworks </h2>}
          {value === 1 && <h2> servise </h2>}
          {value === 2 && <h2> company </h2>}
          {value === 3 && <h2> design </h2>}
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Next.js v4-beta example
            </Typography>
            <Link href="/about" color="secondary">
              Go to the about page
            </Link>
            <ProTip />
          </Box>
        </Container>
        <ControlledExpansionPanels />
        <MadeWithLove />
      </Fragment>
    );
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabsRoot: {
    display: "flex",
    borderBottom: '1px solid #e8e8e8',
  },
  tabsIndicator: {
    backgroundColor: '#1890ff',
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
  },
});

export default withStyles(styles)(Index);
