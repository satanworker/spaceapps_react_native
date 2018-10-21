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
        latitude: 37.78981164138183,
        longitude: -122.41481444962847
      },
      {
        latitude: 37.78191895438809,
        longitude: -122.41693367922169
      },
      {
        latitude: 37.78669235058658,
        longitude: -122.42387415797538
      },
      {
        latitude: 37.79615448710348,
        longitude: -122.42556954028406
      },
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