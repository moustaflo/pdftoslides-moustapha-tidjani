import React, { Component } from 'react'

class ImageBorderWidth extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
        <div>
        {this.props.advancedCustomization === true?
        <div>
          <div>Image Border Width:</div>
          <input type='text' onChange={(Event) => this.props.onImageBorderWidthChange(Event.target.value)}/>
        </div>
        : null }
        </div>
    )
  }
}

export default ImageBorderWidth