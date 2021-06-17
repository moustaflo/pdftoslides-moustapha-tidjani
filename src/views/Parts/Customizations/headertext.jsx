import React, { Component } from 'react'

class HeaderText extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
        <div>
        {this.props.advancedCustomization === true?
        <div>
          <div>Header Text Color:</div>
          <input type='text' onChange={(Event) => this.props.onHeaderColorChange(Event.target.value)}/>
        </div>
        : null }
        </div>
    )
  }
}

export default HeaderText