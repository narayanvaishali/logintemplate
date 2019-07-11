import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Layout from '../Layout';
import Paper from '@material-ui/core/Paper';

class Roles extends Component  {

  render () {

    return(
       <Layout title="Roles" drawer="true">
        <Paper>
                <div>Roles</div>
        </Paper>
        </Layout>
    )
  }
}

export default withStyles(styles)(Roles);