import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { registerRootComponent } from 'expo'

import configureStore from './redux'

import App from './App'

class Root extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <App />
      </Provider>
    )
  }
}

registerRootComponent(Root)