import React, { PureComponent } from 'react';

import PropTypes from 'prop-types'

import { MapView } from 'expo'

const Marker = MapView.Marker

class FireMarker extends PureComponent {
  render() {
    const { latitude, longitude } = this.props
    return (
      <Marker
        image={require('../../../assets/fire.png')}
        coordinate={{ latitude, longitude }}
      />
    )
  }
}

FireMarker.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number
}

export default FireMarker