import './Archive.css'
import { Button } from 'reactstrap'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas)
const url = process.env.REACT_APP_SERVER_URL || ''

class Archive extends Component {
  constructor (props) {
    super()
    this.state = {
      file: props.file
    }
    this.handleFileDownload = this.handleFileDownload.bind(this)
  }

  handleFileDownload (event) {
    event.preventDefault()
    const url = process.env.REACT_APP_SERVER_URL || ''
    const fileURL = `${url}/file?path=${this.state.file.path}`
    window.open(fileURL, '_blank')
  }

  render () {
    const embedURL = `${url}/embed?path=${this.state.file.path}`
    switch (this.state.file.extension) {
      case 'apng':
      case 'avif':
      case 'gif':
      case 'jpeg':
      case 'jpg':
      case 'png':
      case 'svg':
      case 'webp':
        return (
          <section className='archive'>
            <h2>{this.state.file.path.substring(this.state.file.path.lastIndexOf('/') + 1)}</h2>
            <img alt={this.state.file.path} src={embedURL} />
            <Button className='btn btn-primary' onClick={this.handleFileDownload}>
              <FontAwesomeIcon icon={['fas', 'download']} />
              Download file
            </Button>
          </section>
        )
      case 'mp3':
      case 'wav':
      case 'ogg':
      case 'flac':
      case 'm4a':
        return (
          <section className='archive'>
            <h2>{this.state.file.path.substring(this.state.file.path.lastIndexOf('/') + 1)}</h2>
            <audio controls='controls' src={embedURL}>
              Your browser does not support the HTML5 Audio element.
            </audio>
            <Button className='btn btn-primary' onClick={this.handleFileDownload}>
              <FontAwesomeIcon icon={['fas', 'download']} />
              Download file
            </Button>
          </section>
        )
      case 'mp4':
      case 'mov':
      case 'avi':
      case 'flv':
      case 'mkv':
      case 'wmv':
      case 'mpg':
      case 'mpeg':
        return (
          <section className='archive'>
            <h2>{this.state.file.path.substring(this.state.file.path.lastIndexOf('/') + 1)}</h2>
            <video controls='controls' src={embedURL}>
              <source src={embedURL} type={`video/${this.state.file.extension !== 'mkv' ? this.state.file.extension : 'x-matroska' }`} />
              Your browser does not support the HTML5 Video element.
            </video>
            <Button className='btn btn-primary' onClick={this.handleFileDownload}>
              <FontAwesomeIcon icon={['fas', 'download']} />
              Download file
            </Button>
          </section>
        )
      default:
        return (
          <section className='archive'>
            <Button className='btn btn-primary' onClick={this.handleFileDownload}>
              <FontAwesomeIcon icon={['fas', 'download']} />
              Download file
            </Button>
          </section>
        )
    }
  }
}

export default Archive
