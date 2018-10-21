import React, { PureComponent } from 'react'

import { View } from 'react-native'

class BaseView extends PureComponent {
  render() {
    const { children, style, ...rest } = this.props
    return (
      <View style={{ ...styles, ...style }} {...rest}>
        {children}
      </View>
    )
  }
}

const styles = {}

export default BaseView