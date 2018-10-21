import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import { Container, BaseButton, View } from '../../../elements'
import { MapView, Permissions, Location } from 'expo'

import FireMarker from './FireMarker'

class FireMap extends PureComponent {
  state = {}
  constructor(props) {
    super(props)
    this.getPremissions = this.getPremissions.bind(this)
    this.onMapPress = this.onMapPress.bind(this)
  }
  componentDidMount() {
    this.getPremissions()
  }
  async getPremissions() {
    let { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status === 'granted') {
      const location = await Location.getCurrentPositionAsync({})
      this.setState({ location })
    }
  }
  onMapPress(e) {
    this.setState({
      fireMarker: e.nativeEvent.coordinate
    })
  }
  render() {
    const { location, fireMarker } = this.state
    return (
      <Container style={styles.container}>
        {
          location && <MapView
            showsUserLocation
            style={styles.map}
            onPress={this.onMapPress}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          >
            {
              fireMarker && <FireMarker
                latitude={fireMarker.latitude}
                longitude={fireMarker.longitude}
              />
            }
          </MapView>
        }
        {
          fireMarker && <View style={styles.buttonContainer}>
            <BaseButton
              title='I see fire 🚨'
              style={styles.button}
              onPress={this.props.onButtonPress}
            />
          </View>
        }
      </Container>
    )
  }
}

FireMap.propTypes = {
  onButtonPress: PropTypes.func.isRequired
}

const styles = {
  container: {
    alignSelf: 'stretch'
  },
  map: {
    flex: 1,
    alignSelf: 'stretch'
  },
  buttonContainer: {
    paddingBottom: 20
  }
}

export default FireMap