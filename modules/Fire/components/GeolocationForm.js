import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Modal, Text } from 'react-native'

import { TextInput, BaseButton, ImagePicker, View } from '../../../elements'

class GeolocationForm extends PureComponent {
  state = {
    notes: '',
    file: ''
  }
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleFileChange = this.handleFileChange.bind(this)
  }
  handleInputChange(name, value) {
    this.setState({
      [name]: value
    })
  }
  handleFileChange(file) {
    console.log(file, 'file')
  }
  handleFormSubmit() {
    const { fireMarker, location } = this.props
    this.props.postFire({
      fireLattitude: fireMarker.latitude,
      fireLongitude: fireMarker.longitude,
      userLatitude: location.coords.latitude,
      userLongitude: location.coords.longitude
    })
    this.props.close()
  }
  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.isVisible}
      >
        <View style={styles.containerStyles}>
          <Text>Notes</Text>
          <TextInput
            onChange={this.handleInputChange}
            value={this.state.notes}
            name="notes"
            style={styles.buttonsMargins}
          />
          <ImagePicker
            title="Pick Image"
            onFileChange={this.handleFileChange}
            style={styles.buttonsMargins}
          />
          <View style={styles.buttonsContainer}>
            <BaseButton
              style={styles.buttonsDanger}
              title='Cancell'
              onPress={this.props.close}
            />
            <BaseButton
              title='Submit 🔥'
              onPress={this.handleFormSubmit}
            />
          </View>
        </View>
      </Modal>
    )
  }
}

const styles = {
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonsDanger: {
    color: 'red'
  },
  containerStyles: {
    flex: 1,
    padding: 40,
    marginTop: 70
  },
  buttonsMargins: {
    marginBottom: 20
  }
}


GeolocationForm.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  postFire: PropTypes.func.isRequired,
  location: PropTypes.object,
  fireMarker: PropTypes.object
}

export default GeolocationForm