import React from 'react'
import './App.scss'
import Todos from './components/Todos'

export default class App extends React.Component{
  render() {
    return (
      <div className="App">
        <h1>Todos</h1>
        <Todos/>
      </div>
    )
  }
}

