import React from 'react'
import { StyleSheet, Modal, View } from 'react-native'

import { Container } from './elements'

import FireMap from './modules/Fire/components/FireMap'
import GeolocationForm from './modules/Fire/containers/GeolocationFormContainer'

export default class App extends React.Component {
  state = {
    isModalVisible: false
  }
  constructor(props) {
    super(props)
    this.openModal = this.openModal.bind(this)
    this.changeMapLocation = this.changeMapLocation.bind(this)
    this.changeFireMarker = this.changeFireMarker.bind(this)
  }

  openModal() {
    this.setState({
      isModalVisible: true
    })
  }

  changeMapLocation(location) {
    this.setState({ location })
  }

  changeFireMarker(e) {
    this.setState({
      fireMarker: e.nativeEvent.coordinate
    })
  }

  render() {
    const { location, fireMarker } = this.state
    return (
      <Container>
        <FireMap
          onButtonPress={this.openModal}
          changeLocation={this.changeMapLocation}
          changeFireMarker={this.changeFireMarker}
          location={location}
          fireMarker={fireMarker}
        />
        <GeolocationForm
          location={location}
          fireMarker={fireMarker}
          isVisible={this.state.isModalVisible}
        />
      </Container>
    );
  }
}

