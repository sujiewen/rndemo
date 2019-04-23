
/*
 * @providesModule LXDepartmentcell
 *
 * */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

// 2.导入常用组件,注册组件,样式组件,View组件,Text组件
import
{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    NavigatorIOS,
    ListView,
    TouchableOpacity

}from 'react-native'


export default class LXDepartmentcell extends Component {

    static propTypes = {
        rowData:PropTypes.object
    }

    render(){
        return (
            <TouchableOpacity style={styles.cellStyle}
                              onPress={this.jumpDetail.bind(this)}
            >
                {/*图片*/}
                <Image source={{uri:this.props.rowData.img}} style={{width:44,height:44}}/>
                {/*中间View*/}
                <View style={styles.middleViewStyle}>
                    <Text>{this.props.rowData.title}</Text>
                    <Text>{this.props.rowData.source}</Text>
                </View>
                {/*回帖*/}
                <Image source={{uri:this.props.rowData.img}} style={[styles.textStyle,{width:44,height:44}]}/>
            </TouchableOpacity>
        );
    }

    // 跳转到详情页
    jumpDetail(){
        this.props.navigator.push({
            component:Detail,
            title:'新闻详情页',
            passProps:{
                newsID:this.props.rowData.id
            }
        })
    }
}

var styles = StyleSheet.create({
    cellStyle:{
        flexDirection:'row',
        padding:10,
    },
    middleViewStyle:{
        justifyContent:'space-between',
        flex:1,
        marginLeft:10
    },
    textStyle:{
        position:'absolute',
        bottom:10,
        right:10
    }
});