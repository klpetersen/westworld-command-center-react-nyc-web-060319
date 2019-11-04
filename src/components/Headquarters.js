import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import LogPanel from './LogPanel'
import ColdStorage from './ColdStorage'
import { Log } from '../services/Log';


class Headquarters extends Component {
  render(){
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>

        <ColdStorage hosts={this.props.hosts} showHostData={this.props.showHostData}/> 

        </Grid.Column>
        <Grid.Column width={5}>

          <Details host={this.props.host}/>

        </Grid.Column>
        <Grid.Column width={3}>

        <LogPanel /> 

        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
