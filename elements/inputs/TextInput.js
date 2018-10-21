import React, { PureComponent } from 'react'
import { TextInput } from 'react-native'
import PropTypes from 'prop-types'

class Text extends PureComponent {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(value) {
    this.props.onChange(this.props.name, value)
  }
  render() {
    const { handleChange, value, style, ...rest } = this.props
    return (
      <TextInput
        onChangeText={handleChange}
        value={value}
        style={{...styles.input, ...style}}
        {...rest}
      />
    )
  }
}

const styles = {
  input: {
    height: 40,
    borderWidth: 1
  }
}


Text.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default Text