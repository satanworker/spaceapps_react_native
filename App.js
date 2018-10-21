import React from 'react'
import { StyleSheet, Modal, View } from 'react-native'

import { Container } from './elements'

import FireMap from './modules/Fire/components/FireMap'
import GeolocationForm from './modules/Fire/components/GeolocationForm'

export default class App extends React.Component {
  state = {
    isModalVisible: false
  }
  constructor(props) {
    super(props)
    this.openModal = this.openModal.bind(this)
  }

  openModal() {
    this.setState({
      isModalVisible: true
    })
  }

  render() {
    return (
      <Container>
        <FireMap
          onButtonPress={this.openModal}
        />
        <GeolocationForm 
          isVisible={this.state.isModalVisible}
        />
      </Container>
    );
  }
}

