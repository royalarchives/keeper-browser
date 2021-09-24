import './ArchiveButton.css'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas)

class ArchiveButton extends Component {
  constructor (props) {
    super()
    this.state = {
      id: props.archive.id,
      name: props.archive.name,
      path: props.archive.relativePath,
      extension: props.archive.extension,
      handleFileOpen: props.onFileOpen,
      handleFolderChange: props.onFolderChange
    }
    switch (props.archive.extension) {
      case 'mp3':
      case 'wav':
      case 'flac':
        this.state.icon = 'file-audio'
        break
      case 'png':
      case 'jpeg':
      case 'gif':
        this.state.icon = 'file-image'
        break
      default:
        this.state.icon = 'file'
        break
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    event.preventDefault()
    if (!this.state.extension) {
      this.state.handleFolderChange(this.state.path)
    } else {
      this.state.handleFileOpen(this.state.path)
    }
  }

  render () {
    if (!this.state.icon) {
      return (
        <Button className='archive-button' onClick={this.handleClick}>
          <FontAwesomeIcon icon={['fas', 'folder']} />
          {this.state.name}
        </Button>
      )
    } else {
      return (
        <Button className='archive-button' onClick={this.handleClick}>
          <FontAwesomeIcon icon={['fas', this.state.icon]} />
          {this.state.name}
        </Button>
      )
    }
  }
}

export default ArchiveButton
