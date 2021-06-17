import React, { Component } from 'react'

class CompanyName extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
        <div>
          <div>Company Name:</div>
          <input type='text' onChange={(Event) => this.props.onCompanyNameChange(Event.target.value)}/>
        </div>
    )
  }
}

export default CompanyName