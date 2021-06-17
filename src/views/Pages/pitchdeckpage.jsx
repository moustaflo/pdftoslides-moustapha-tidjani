import React, { Component } from 'react'
import axios from 'axios'
import CompanyName from '../Parts/Customizations/companyname.jsx'
import CompanyMotto from '../Parts/Customizations/companymotto.jsx'
import PitchUpload from '../Parts/Customizations/pitchupload.jsx'
import UploadButton from '../Parts/Customizations/uploadbutton.jsx'
import CustomizationToggle from '../Parts/Customizations/customizationtoggle.jsx'
import HeaderBackgound from '../Parts/Customizations/headerbackground.jsx'
import HeaderText from '../Parts/Customizations/headertext.jsx'
import BodyBackground from '../Parts/Customizations/bodybackgound.jsx'
import ImageBorderColor from '../Parts/Customizations/imagebordercolor.jsx'
import ImageBorderWidth from '../Parts/Customizations/imageborderwidth.jsx'
import Slides from '../Parts/Body/slides.jsx'

class Welcome extends Component {
  constructor (props) {
    super(props)
    this.state = {
      companyName: '',
      companyMotto: '',
      advancedCustomization: false,
      uploadedFile: '',
      uploadResponse: '',
      uploadResponseColor: '',
      images: [],
      companyInfoStyle: {
        padding: '5%',
        background: 'black',
        color: 'white',
        textAlign: 'center'
      },
      bodyBackgroundStyle: {
        textAlign: 'center',
        padding: '5%',
        background: 'beige',
      },
      slideStyle: {
        marginBottom: '20px',
        borderRadius: '5%',
        borderStyle: 'solid',
        borderWidth: '10px',
        borderColor: 'brown',
        width: '80%',
        height: 'auto'
      }

    }
  }

  fileTypeCheck = ()=> {
    let fileToCheck = this.state.uploadedFile 
    // Accepted file types
    const fileTypes = ['application/pdf']

    if (fileTypes.every(type => fileToCheck.type !== type)) return false

    return true
  
  }

  onUploadPitch = (userInput) => {
    this.setState({
      uploadedFile: userInput
    })
  }

  onClickHandler = () => {
    if (this.fileTypeCheck()) {
      const fileData = new FormData()
      fileData.append('file', this.state.uploadedFile)
      this.setState({
      uploadResponse: 'Uploading...',
      uploadResponseColor: 'black'
      })
      axios.post('/api/upload', fileData).then((response) => {
        this.setState({
          uploadResponse: response.data.uploadResponse,
          uploadResponseColor: 'green',
          images: response.data.images
        })
      }).catch((error) => {
        this.setState({
          uploadResponse: 'An error occured while uploading your file',
          uploadResponseColor: 'red'
        })
        console.log(error)
      })
    } else {
      this.setState({
        uploadResponse: 'the file extension for ' + this.state.uploadedFile['name'] + ' is not accepted at this time :(',
        uploadResponseColor: 'red'
      })
    }
  }

  onCompanyNameChange = (userInput) => {
    this.setState({
      companyName: userInput
    })
  }
  onCompanyMottoChange = (userInput) => {
    this.setState({
      companyMotto: userInput
    })
  }

  onExpandHandler = () => {
    this.setState({
      advancedCustomization: !this.state.advancedCustomization
    })
  }

  onHeaderBackgroundChange = (userInput) => {
    let currentState = {...this.state.companyInfoStyle}
    currentState.padding = '5%'
    currentState.textAlign = 'center'
    currentState.background = userInput? userInput: 'black'
    this.setState({
      companyInfoStyle: currentState
    })
  }

  onHeaderColorChange = (userInput) => {
    let currentState = {...this.state.companyInfoStyle}
    currentState.padding = '5%'
    currentState.textAlign = 'center'
    currentState.color = userInput? userInput: 'white'
    this.setState({
      companyInfoStyle: currentState
    })
  }

  onBodyBackgroundChange = (userInput) => {
    let currentState = {...this.state.bodyBackgroundStyle}
    currentState.padding = '5%'
    currentState.textAlign = 'center'
    currentState.background = userInput? userInput: 'beige'
    this.setState({
      bodyBackgroundStyle: currentState
    })
  }

  onImageBorderColorChange = (userInput) => {
    let currentState = {...this.state.slideStyle}
    currentState.marginBottom = '20px'
    currentState.borderRadius = '5%'
    currentState.borderStyle = 'solid'
    currentState.borderColor = 'brown'
    currentState.width = '80%'
    currentState.height = 'auto'
    currentState.borderColor = userInput? userInput: 'brown'
    this.setState({
      slideStyle: currentState
    })
  }

  onImageBorderWidthChange = (userInput) => {
    let currentState = {...this.state.slideStyle}
    currentState.marginBottom = '20px'
    currentState.borderRadius = '5%'
    currentState.borderStyle = 'solid'
    currentState.width = '80%'
    currentState.height = 'auto'
    currentState.borderWidth = userInput? userInput + 'px': '10px'
    this.setState({
      slideStyle: currentState
    })
  }

  render () {
    return (
      <div>
        <div style={{background: 'turquoise', color: 'black', padding: '1%', marginBottom: '10px'}}>

        <h1 style={{textAlign: 'center'}}> Pitchdeck Customizer</h1>

        <h2 style={{textAlign: 'center', background: 'white', color: this.state.uploadResponseColor}}>
          {this.state.uploadResponse}
        </h2>

        <CompanyName onCompanyNameChange={this.onCompanyNameChange}></CompanyName>

        <CompanyMotto onCompanyMottoChange={this.onCompanyMottoChange}></CompanyMotto>

        <PitchUpload onUploadPitch={this.onUploadPitch}></PitchUpload>

        <UploadButton 
        onClickHandler={this.onClickHandler} 
        uploadResponse={this.state.uploadResponse} 
        uploadedFile={this.state.uploadedFile} 
        companyName={this.state.companyName} 
        companyMotto={this.props.companyMotto}>
        </UploadButton>

        <CustomizationToggle
        onExpandHandler={this.onExpandHandler}
        uploadResponse={this.state.uploadResponse}
        advancedCustomization={this.state.uploadResponse}>
        </CustomizationToggle>

        <HeaderBackgound 
        onHeaderBackgroundChange={this.onHeaderBackgroundChange}
        advancedCustomization={this.state.advancedCustomization}>
        </HeaderBackgound>

        <HeaderText
        onHeaderColorChange={this.onHeaderColorChange}
        advancedCustomization={this.state.advancedCustomization}>
        </HeaderText>

        <BodyBackground
        onBodyBackgroundChange={this.onBodyBackgroundChange}
        advancedCustomization={this.state.advancedCustomization}>
        </BodyBackground>

        <ImageBorderColor
        onImageBorderColorChange={this.onImageBorderColorChange}
        advancedCustomization={this.state.advancedCustomization}>
        </ImageBorderColor>

        <ImageBorderWidth
        onImageBorderWidthChange={this.onImageBorderWidthChange}
        advancedCustomization={this.state.advancedCustomization}>
        </ImageBorderWidth>

        </div>

        <Slides 
        images={this.state.images} 
        companyName={this.state.companyName} 
        companyMotto={this.state.companyMotto} 
        pitchdeckBackground={this.state.bodyBackgroundStyle} 
        companyInfoStyle={this.state.companyInfoStyle} 
        slideStyle={this.state.slideStyle} 
        uploadResponse={this.state.uploadResponse}>
        </Slides>

      </div>
    )
  }
}

export default Welcome
