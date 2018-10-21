import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import { Container, BaseButton, View } from '../../../elements'
import { MapView, Permissions, Location, } from 'expo'

import FireMarker from './FireMarker'

const Polygon = MapView.Polygon

class FireMap extends PureComponent {
  state = {
    polygon: [
      {
        latitude: 55.76488919564486,
        longitude: 37.583707704221766
      },
      {
        latitude: 55.76427352520776,
        longitude: 37.58585373201755
      },
      {
        latitude: 55.762595472110796,
        longitude: 37.58415818454733
      },
      {
        latitude: 55.76304215516818,
        longitude: 37.57926470577249
      }
    ]
  }
  constructor(props) {
    super(props)
    this.getPremissions = this.getPremissions.bind(this)
  }

  componentDidMount() {
    this.getPremissions()
  }

  async getPremissions() {
    let { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status === 'granted') {
      const location = await Location.getCurrentPositionAsync({})
      this.props.changeLocation(location)
    }
  }

  render() {
    const { location, fireMarker } = this.props
    return (
      <Container style={styles.container}>
        {
          location && <MapView
            showsUserLocation
            style={styles.map}
            onPress={this.props.changeFireMarker}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          >
            <Polygon
              coordinates={this.state.polygon}
              fillColor='rgba(100, 0, 20, 0.5)'
              strokeColor='rgba(100, 0, 20, 0.5)'
            />
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
  onButtonPress: PropTypes.func.isRequired,
  location: PropTypes.object,
  fireMarker: PropTypes.object,
  changeLocation: PropTypes.func,
  changeFireMarker: PropTypes.func
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