import React, { Component } from 'react'

class ImageBorderColor extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
        <div>
        {this.props.advancedCustomization === true?
        <div>
          <div>Image Border Color:</div>
          <input type='text' onChange={(Event) => this.props.onImageBorderColorChange(Event.target.value)}/>
        </div>
        : null }
        </div>
    )
  }
}

export default ImageBorderColor