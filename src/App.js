import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'


class App extends Component {

  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.


  state = { 
    hosts: [], 
    areas: [], 
    clickedHost: {}
  }

  fetchHosts() { 
    fetch('http://localhost:4000/hosts')
    .then(resp => resp.json())
    .then(resp => this.setState ({ 
      hosts: resp
    }))
  }


  fetchAreas() { 
    fetch('http://localhost:4000/areas')
    .then(resp => resp.json())
    .then(resp => this.setState({
      areas: resp
    }))
  }
  componentDidMount() { 
    this.fetchHosts(); 
    this.fetchAreas(); 
  }

  showHostData = (host) => { 
    this.setState({
      ...this.state, 
      clickedHost: host
    })
  }

  render(){
    return (
      <Segment id='app'>
        <WestworldMap areas={this.state.areas}/> 
        <Headquarters hosts={this.state.hosts} showHostData={this.showHostData} host={this.state.clickedHost}/> 
      </Segment>
    )
  }
}

export default App;
