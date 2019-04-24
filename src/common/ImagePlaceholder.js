import React, { Component } from 'react'
import Image from 'react-native-fast-image'
import ImagePlaceholderDefault from '../source/images/index'

class ImagePlaceholder extends Component {
  constructor (props) {
    super(props)
    const { source } = props;
    console.log('constructor source ='+JSON.stringify(source));
    this.state = {
      image: source,
      loading: true,
      loadError: false,
      defaultSource: ImagePlaceholderDefault.personPlaceholder
    }
  }

  render () {
    let { style = {}, source } = this.props
    source = this.state.loadError || this.state.loading
      ? this.state.defaultSource
      : this.state.image;
    return (
      <Image
        {...this.props}
        source={source}
        style={style}
        onError={(e) => {
          console.log(e, '[error]')
          this.setState({ loadError: true })
        }}
        onLoad={(ss) => {
            if (!(this.state.image.uri == null || this.state.image.uri == undefined || this.state.image.uri.length == 0))
              this.setState({ loading: false })
        }}
        onLoadEnd={(ss) => {
          console.log('onLoadEnd=' + JSON.stringify(this.state.image))
        }}
      />
    )
  }
}

export default ImagePlaceholder
