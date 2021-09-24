import './ArchiveList.css'
import ArchiveButton from './ArchiveButton.js'
import FolderButton from './FolderButton.js'
import React, { Component } from 'react'

class ArchiveList extends Component {
  constructor(props) {
    super()
    this.state = {
      archives: props.archives.sort((a, b) => { return a.relativePath.toLowerCase() > b.relativePath.toLowerCase() ? 1 : -1 }),
      last: props.archives.filter(archive => archive.crumb).pop(),
      handleFolderChange: props.handleFolderChange,
      handleFileOpen: props.handleFileOpen
    }
  }

  render() {
    console.log('rendering archive list', this.state.archives)
    return (
      <div>
        <ul className='crumb-list'>
          {this.state.archives.map(archive => {
            const lastElement = archive === this.state.last
            if (archive.crumb) {
              return (
                <li key={archive.hash || archive.path}>
                  <FolderButton archive={archive} handleFolderChange={this.state.handleFolderChange} />
                  <span>{lastElement ? '' : '>'}</span>
                </li>
              )
            }
          })}
        </ul>
        <ul className='archive-list'>
          {this.state.archives.map(archive => {
            if (!archive.crumb) {
              return (
                <li key={archive.hash}>
                  <ArchiveButton archive={archive} handleFileOpen={this.state.handleFileOpen} handleFolderChange={this.state.handleFolderChange} />
                </li>
              )
            }
          })}
        </ul>
      </div>
    )
  }
}

export default ArchiveList
