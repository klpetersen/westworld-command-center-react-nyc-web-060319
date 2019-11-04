import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

export default class HostList extends React.Component {

  renderHosts() { 
    return this.props.hosts.map(host => { 
      return (
        <Host 
        image={host.imageUrl} 
        id={host.id}
        firstName={host.firstName}
        lastName={host.lastName}
        active={host.active}
        gender={host.gender}
        area={host.area}
        authorized={host.authorized}
        showHostData={this.props.showHostData}
        />
      )
    })
  }

  render(){
    return(
      <Card.Group itemsPerRow={6}>
        {this.renderHosts()}
      </Card.Group>
    )
  } 
}

