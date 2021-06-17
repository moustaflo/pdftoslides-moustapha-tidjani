import React, { Component } from 'react'

class BodyBackground extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
        <div>
        {this.props.advancedCustomization === true?
        <div>
          <div>Body Background Color:</div>
          <input type='text' onChange={(Event) => this.props.onBodyBackgroundChange(Event.target.value)}/>
        </div>
        : null }
        </div>
    )
  }
}

export default BodyBackground