import React, { Component } from 'react'
import './App.css'
import Nav from './Nav'
import TemplateList from './TemplateList'
import { Provider } from 'react-redux'
import store from  '../Redux/Templates/Store'

const App = () => {
  return (
    <Provider store={store}>
      <div className="App" >
        <Nav />
        <TemplateList />

      </div>
    </Provider>

  )
}

export default App
