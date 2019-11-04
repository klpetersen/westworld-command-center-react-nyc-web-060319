import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'
import Details from './Details'

export default class Host extends React.Component {

  handleClick = (event) => {
    this.props.showHostData(this.props)
  }

  render() {
    return(
      <Card
        className="host"
        onClick={this.handleClick}
        image={this.props.image}
        raised
      />
    )
  }
}

