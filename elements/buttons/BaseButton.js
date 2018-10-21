import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Button } from 'react-native'

class BaseButton extends PureComponent {
  render() {
    const { style, ...rest } = this.props
    return <Button style={style} {...rest} />
  }
}

BaseButton.propTypes = {
  onPress: PropTypes.func.isRequired
}

export default BaseButton