import React, { Component } from 'react'

class HeaderBackgound extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
        <div>
        {this.props.advancedCustomization === true?
        <div>
          <div>Header Background Color (<a href='https://www.google.com/search?q=css+color+picker' target='_blank'>color pick helper</a>):</div>
          <input type='text' onChange={(Event) => this.props.onHeaderBackgroundChange(Event.target.value)}/>
        </div>
        : null }
        </div>
    )
  }
}

export default HeaderBackgound