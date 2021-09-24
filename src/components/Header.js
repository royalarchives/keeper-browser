import './Header.css'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas)

const Header = () => {
  return (
    <header className='server-header'>
      <h1 className='title'>
        <span>
          <FontAwesomeIcon icon={['fas', 'archive']} />
          Royal Archives
        </span>
      </h1>
    </header>
  )
}

export default Header
