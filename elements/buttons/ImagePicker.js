import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { ImagePicker, Permissions } from 'expo'
import BaseButton from './BaseButton'

class Image extends PureComponent {
  constructor(props) {
    super(props)
    this.pickImage = this.pickImage.bind(this)
  }
  async pickImage() {
    let { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if (status === 'granted') {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      })
      if (!result.cancelled) {
        this.props.onFileChange(result)
      }
    }
  }
  render() {
    const { title, onFileChange, style, ...rest } = this.props
    return (
      <BaseButton
        style={{ ...style }}
        title={title}
        onPress={this.pickImage}
        {...rest}
      />
    )
  }
}

Image.propTypes = {
  title: PropTypes.string.isRequired,
  onFileChange: PropTypes.func.isRequired
}




export default Image