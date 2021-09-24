import './Archives.css'
import Archive from './Archive.js'
import ArchiveList from './ArchiveList.js'
import React, { Component } from 'react'

class Archives extends Component {
  constructor (props) {
    super()
    this.state = {
      library: props.library
    }
    console.log(props.library)
    this.handleFolderChange = this.handleFolderChange.bind(this)
    this.handleFileOpen = this.handleFileOpen.bind(this)
  }

  handleFolderChange (path) {
    this.setState({ path, file: null })
  }

  handleFileOpen (path) {
    console.log('opening file...', path)
    const findArchive = (path) => {
      const parts = path.split('/')
      for (const part of parts) {
        console.log('part => ' + part)
      }
      // find files in the path
      function scan (children, partIndex) {
        for (const child of children) {
          if (child.name === parts[partIndex]) {
            if (partIndex === parts.length - 1) {
              console.log('returning branch child')
              return child
            }
            return scan(child.children, partIndex + 1)
          }
        }
      }
      return scan(this.state.library.children, 0)
      // find folders in the path
    }
    const file = findArchive(path)
    console.log('file', file)
    this.setState({ path, file })
  }

  render () {
    console.log('state', this.state)
    const crumbs = []
    if (this.state.path === '/') {
      crumbs.push({
        name: '/',
        path: '/',
        relativePath: '/',
        crumb: true
      })
    } else {
      let cumulativePath = ''
      const parts = this.state.path && !this.state.path.startsWith('/') ? this.state.path.split('/') : undefined
      console.log('path', this.state.path, 'parts', parts)
      if (parts && parts.length) {
        crumbs.push({
          name: '/',
          path: '/',
          relativePath: '/',
          crumb: true
        })
        for (const part of parts) {
          cumulativePath += `/${part}`
          console.log('part', part, 'path', cumulativePath)
          crumbs.push({
            name: part,
            path: cumulativePath,
            relativePath: cumulativePath,
            crumb: true
          })
        }
      }
    }
    if (this.state.file) {
      console.log('got a single archive')
      crumbs.pop()
      return (
        <section className='archives'>
          <ArchiveList key='single-archive' archives={crumbs} onFolderChange={this.handleFolderChange} onFileOpen={this.handleFileOpen} />
          <Archive file={this.state.file} />
        </section>
      )
    }
    let archives
    // browsing 'root' the files and folders from combined catalog paths
    if (!this.state.path) {
      console.log('rendering "/" root')
      archives = [this.state.library]
    } else if (this.state.path === '/') {
      console.log('rendering "/" contents')
      archives = this.state.library.children
      // browsing the merged contents of all catalog paths
    } else {
      console.log('rendering "/' + this.state.path + '" contents')
      const findArchives = (path) => {
        console.log('find archives', path)
        const parts = path.split('/')
        for (const part of parts) {
          console.log('part => ' + part)
        }
        // find files in the path
        function scan (children, partIndex) {
          console.log('scan children', parts[partIndex])
          for (const child of children) {
            if (child.name === parts[partIndex]) {
              console.log('parts match', parts[partIndex], child)
              if (partIndex === parts.length - 1) {
                console.log('returning final branch children')
                return child.children
              }
              console.log('scanning more children')
              return scan(child.children, partIndex + 1)
            }
          }
        }
        return scan(this.state.library.children, 0)
        // find folders in the path
      }
      archives = findArchives(this.state.path)
    }
    console.log('rendering archivelist with archives', archives)
    return (
      <section className='archives'>
        <ArchiveList key={this.state.path} archives={crumbs.concat(archives)} onFolderChange={this.handleFolderChange} onFileOpen={this.handleFileOpen} />
      </section>
    )
  }
}

export default Archives
