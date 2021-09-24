import './FolderButton.css'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas)

class FolderCrumb extends Component {
  constructor (props) {
    super()
    this.state = {
      id: props.archive.id,
      name: props.archive.name,
      path: props.archive.relativePath,
      handleFolderChange: props.onFolderChange
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    event.preventDefault()
    if (this.state.path === '/') {
      return this.state.handleFolderChange('/')
    }
    this.state.handleFolderChange(this.state.path.substring(1))
  }

  render () {
    return (
      <Button className='folder-button' onClick={this.handleClick}>
        <FontAwesomeIcon icon={['fas', 'folder']} />
        {this.state.name}
      </Button>
    )
  }
}

export default FolderCrumb
