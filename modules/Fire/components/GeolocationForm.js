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
  }
  handleInputChange(name, value) {
    this.setState({
      [name]: value
    })
  }
  handleFormSubmit() {
    console.log(this.state.notes, this.state.file, 'formValue')
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
  isVisible: PropTypes.bool.isRequired
}

export default GeolocationForm