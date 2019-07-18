import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Layout from '../Layout';
import Paper from '@material-ui/core/Paper';

class Dashboard extends Component  {
render () {

    return(
       <Layout title="Dashboard" drawer='true'>
        <Paper>
                <div> Dashboard </div>
        </Paper>
        </Layout>
    )
  }
}
export default withStyles(styles)(Dashboard);