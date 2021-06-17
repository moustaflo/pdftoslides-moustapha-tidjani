import React, { Component } from 'react'

class Slides extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    let slides = this.props.images.map( slide => <img key={slide} src={slide} alt={this.props.companyName} style={this.props.slideStyle} /> )
    return (
        <div>
          {this.props.uploadResponse === 'Success!'?
          <div>
            <div style={this.props.companyInfoStyle}>
                <h1>{this.props.companyName}</h1>
                <p>{this.props.companyMotto}</p>
            </div>
            <div style={this.props.pitchdeckBackground}>
            {slides}
            </div>
          </div>
          : null }
        </div>
    )
  }
}

export default Slides
