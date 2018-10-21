import React, { PureComponent } from 'react'

import { View } from 'react-native'

class Container extends PureComponent {
  render() {
    const { children, style, ...rest } = this.props
    return (
      <View style={{ ...styles, ...style }} {...rest}>
        {children}
      </View>
    )
  }
}

const styles = {
  flex: 1
}

export default Container