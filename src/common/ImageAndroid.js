import React,{Component} from 'react';
import { StyleSheet,View,Image } from 'react-native';


export default class ImageAndroid extends Component {
    constructor(props){
        super(props);
        this.state={
            opacity:1
        }
    }

    componentWillMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={this.props.img}
                    resizeMode='cover'
                    style={[this.props.style,{position:'absolute'}]}
                    onLoadStart={()=>this.setState({ opacity:1 })}
                    onLoad={()=>this.setState({ opacity:0 })}
                />
                <Image
                    source={this.props.loadingImg}
                    resizeMode='cover'
                    style={{opacity:this.state.opacity}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
});
