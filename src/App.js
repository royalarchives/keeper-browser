/* eslint-disable */
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header.js'
import Archives from './components/Archives.js'

class App extends Component {
  async componentDidMount () {
    this._isMounted = true
    const url = (process.env.REACT_APP_SERVER_URL || '') + '/library.json'
    try {
      const raw = await fetch(url)
      if (raw && raw.json) {
        const library = await raw.json()
        if (this._isMounted) {
          this.setState({ library })
        }
      }
    } catch (error) {
      console.log('error', url, error)
    }
  }

  componentWillUnmount () {
    this._isMounted = false
  }

  render () {
    if (!this.state || !this.state.library) {
      return (<div>Loading</div>)
    }
    return (
      <div className='App container'>
        <Header />
        <Archives library={this.state.library} />
        <p><a href='#top' className='top'>Top of page</a></p>
      </div>
    )
  }
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
