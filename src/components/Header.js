import './Header.css'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas)

class Header extends Component {
  render () {
    return (
      <header className='server-header'>
        <h1 className='title'>
          <span>
            <FontAwesomeIcon icon={['fas', 'archive']} />
            Keeper Browser
          </span>
        </h1>
      </header>
    )
  }
}

export default Header
