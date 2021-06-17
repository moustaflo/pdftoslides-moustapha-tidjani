import React, { Component } from 'react'

class CustomizationToggle extends Component {
  constructor (props) {
    super(props)
  }

  render () {
      return(
        <div>
        {this.props.uploadResponse === 'Success!'?
        <div>
        {this.props.advancedCustomization === true?
        <p>Hide Advanced Customization <button onClick={() => this.props.onExpandHandler()}>{'^'}</button></p>
        : <p>Show Advanced Customization <button onClick={() => this.props.onExpandHandler()}>{'>'}</button></p>}
        </div>
        : null }
        </div>
      )
  }
}

export default CustomizationToggle