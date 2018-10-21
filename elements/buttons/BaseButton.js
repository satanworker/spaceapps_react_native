import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Button } from 'react-native'

class BaseButton extends PureComponent {
  render() {
    return <Button {...this.props} /> 
  }
}

BaseButton.propTypes = {
  onPress: PropTypes.func.isRequired
}

export default BaseButton