import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Modal, Text } from 'react-native'

import { TextInput, BaseButton, View } from '../../../elements'

class GeolocationForm extends PureComponent {
  state = {
    notes: '',
    file: ''
  }
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }
  handleInputChange(name, value) {
    this.setState({
      [name]: value
    })
  }
  handleFormSubmit() {
    const { fireMarker, location } = this.props
    this.props.postFire({
      fireLattitude: fireMarker.latitude,
      fireLongitude: fireMarker.longitude,
      userLatitude: location.coords.latitude,
      userLongitude: location.coords.longitude,
      notes: this.state.notes
    })
  }
  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.isVisible}
      >
        <View style={{ flex: 1, padding: 40 }}>
          <Text>Notes</Text>
          <TextInput
            onChange={this.handleInputChange}
            value={this.state.notes}
            name="notes"
          />
          <BaseButton
            title='Submit'
            onPress={this.handleFormSubmit}
          />
        </View>
      </Modal>
    )
  }
}

GeolocationForm.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  postFire: PropTypes.func.isRequired,
  location: PropTypes.object,
  fireMarker: PropTypes.object
}

export default GeolocationForm