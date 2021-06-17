import React, { Component } from 'react'

class CompanyMotto extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
        <div>
          <div>Company Mission Statement or Motto:</div>
          <textarea onChange={(Event) => this.props.onCompanyMottoChange(Event.target.value)}></textarea>
        </div>
    )
  }
}

export default CompanyMotto