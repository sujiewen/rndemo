import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity,SectionList,Platform,ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions,StackActions} from 'react-navigation';
import  http from  "../common/shttp"
import  {THEME_TEXT} from  '../assets/css/color'
import ImagePlaceholder from '../common/ImagePlaceholder';
import { Avatar, Badge, Icon, withBadge,Header, Image as ImageOther} from 'react-native-elements'

// 清空导航记录，跳转到登录页
const resetAction = StackActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({routeName: 'Login'})
    ]
});

class EnterpriseAddPage extends Component {

    constructor(props) {
        super(props);

        // let newArray = JSON.parse(JSON.stringify(newcontacts));
        //
        // for (let index in newArray) {
        //     let tmpItem = newArray[index];
        //     tmpItem.data= [];
        // }
        //
        this.state = {
            select: 0 ,
            data: [],
            user: null
        };

        this.getCurUserInfo(data => {
            this.state.user = data;

            http.post("http://uat.gongwuyun.net/"+http.connectCommonUrlPor("org","A1002"),null,data.userReginfo.token, null,(isSuccess, data) => {
                this.handlerData(data);
            });
        });



    }

    async getCurUserInfo(callback) {
        let user = await global.storage.load({
            key: 'user',
            autoSync: false,
        });

        callback(user);
    }

    handlerData = (data) => {
        // this.destData = data.data.data;
        let newArray = JSON.parse(JSON.stringify(data.data.data));

        for (let index in newArray) {
            let tmpItem = newArray[index];

            for (let tI in tmpItem.departmentList) {
                tmpItem.departmentList[tI]['type'] = 1;
            }

            for (let tI in tmpItem.userList) {
                tmpItem.userList[tI]['type'] = 0;
            }

            tmpItem.data= [];
        }

        this.setState((preState) => {
            return (
                {
                    ...preState,
                    data: newArray,
                })
        });

    };

    render() {
        return (
            <SectionList
                // ListHeaderComponent={this._ListHeaderComponent}
                // ListFooterComponent={this._ListFooterComponent}
                // SectionSeparatorComponent={this._renderSectionSeparatorComponent}
                // ItemSeparatorComponent={this._renderItemSeparatorComponent}
                renderSectionHeader={this.renderSection}
                renderItem={this.renderIndexPath}
                sections={this.state.data}
                extraData={this.state}
                stickySectionHeadersEnabled={false}
                />
        );
    }

    renderFooter = () => {
        return (
            <View>
                <Text style={{ marginVertical: 20, alignSelf: "center" }}>This is the footer</Text>
            </View>
        );
    };

    renderSection = (info) => {
        const contact = info.section;
        return (
            <TouchableOpacity style={styles.section} onPress={ () => {this.expandCell(contact)}}>
                <Image source={require('../assets/images/company_placeholder.png')} style={styles.sImage} />
                <View style={styles.sContainer}>
                    <Text style={styles.sectionText}>{contact.orgName}<Text style={{fontSize: 20,marginLeft: 0,color:THEME_TEXT }}>{contact.count > 0 ? '('+contact.count+')' : '' } </Text></Text>
                </View>
                <Image source={require('../assets/images/list_arrow_down.png')} style={{ width: 20, height: 20,justifyContent:'flex-end',left: 10}}></Image>
                <View style={styles.line} />
            </TouchableOpacity>
        );
    };

    renderIndexPath = (info) => {
        const contact = info.item;
        return (
            this.renderTItem(contact)
        );
    };

    renderTItem(contact) {
        if(contact.type == 0) {
            return (
                <TouchableOpacity style={styles.row} onPress={ () => {}}>

                    {/*<ImagePlaceholder defaultSource={require('../assets/images/person_placeholder.png')} source={{ uri: contact.userPortraitUrl}} style={styles.image} />*/}

                    {/*{*/}
                    {/*(contact.userPortraitUrl != null && contact.userPortraitUrl != '' && contact.userPortraitUrl != undefined) ? (*/}
                    {/*    <Image defaultSource={require('../assets/images/person_placeholder.png')} source={{ uri: contact.userPortraitUrl}} style={styles.image} />*/}
                    {/*) : (<Image defaultSource={require('../assets/images/person_placeholder.png')} source={require('../assets/images/person_placeholder.png')} style={styles.image} />)*/}

                    {/*}*/}

                    <ImageOther
                        source={{ uri: contact.userPortraitUrl }}
                        style={styles.image}
                        PlaceholderContent={
                            <Image defaultSource={require('../assets/images/group_placeholder.png')} source={require('../assets/images/company_placeholder.png')} style={styles.image} />
                        }
                    />


                    <View style={styles.rContainer}>
                        <Text style={styles.title}>{contact.userName}</Text>
                        <Text style={styles.subtitle}>{contact.postName}</Text>
                    </View>
                    <View style={styles.line} />
                </TouchableOpacity>
            );
        }
        else {
            return (
                <TouchableOpacity style={styles.row} onPress={ () => {
                    this.jumpDeparment(contact.id)}
                }>
                    <Image defaultSource={require('../assets/images/group_placeholder.png')} source={require('../assets/images/company_placeholder.png')} style={styles.image} />
                    <View style={styles.rContainer}>
                        <Text style={styles.title}>{contact.name}</Text>
                    </View>
                    <View style={styles.line} />
                </TouchableOpacity>
            );
        }
    }

    expandCell = (itemData) => {
        // let itemData = this.state.data[section];
        // if (itemData.selected) {
        //     itemData["selected"] = false;
        //
        //     itemData.data = [];
        //
        // }
        // else {
        //     itemData["selected"] = true;
        //     let tmpItemData = newcontacts[section];
        //     itemData.data = tmpItemData.data;
        // }

        if (itemData.selected) {
            this.state.data.map((item, index) => {
                if (item.imagePlaceholder === itemData.imagePlaceholder) {
                    item.selected = !item.selected;
                    item.data = [];
                }
            });

        }else {
            // newcontacts.map((item,index) => {
            //     if (item.index === itemData.index){
            //         let data = item.data;
            //         this.state.data.map((cellItem,i) => {
            //             if (cellItem === itemData){
            //                 cellItem.selected = !cellItem.selected;
            //                 cellItem.data = data;
            //             }
            //         });
            //     }
            // });

            itemData.data = [...itemData.departmentList,...itemData.userList];
            itemData.selected = !itemData.selected;

        }

        let newDatas= JSON.parse(JSON.stringify(this.state.data));
        this.setState({
            data:newDatas
        })
    };

    //跳转部门
    jumpDeparment = (id) => {
        this.props.navigation.push('LXDepartmentList',{depatmentId:id });
    };


    //     let newDatas= JSON.parse(JSON.stringify(this.state.data));
    //
    //     this.setState( (prepareState) =>{
    //         return ({
    //             data:newcontacts
    //         })
    //     })
    // }
}


const styles = StyleSheet.create({
    line: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: 1,
        backgroundColor: "#EEE"
    },
    empty: {
        marginVertical: 20,
        alignSelf: "center"
    },
    section: {
        flex: 1,
        // justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        height:80
    },

    sectionText: {
        fontSize: 20,
        marginLeft: 10,
        alignSelf: "center"
    },
    sectionTitle: { fontSize: 18 },

    sContainer: { marginLeft: 20,flexDirection:'row-reverse' },
    sImage: { marginLeft: 20, width: 44, height: 44 },
    row: { flexDirection: "row", alignItems: "center",height:80},
    image: { marginLeft: 40, width: 44, height: 44,borderRadius: 4 },
    subImage: { marginLeft: 40, width: 44, height: 44,borderRadius: 4 },
    rContainer: { marginLeft: 30 },
    title: { fontSize: 18 },
    subtitle: { fontSize: 14, marginTop: 8 },
});

export default connect(
    (state) => ({
        status: state.loginIn.status,
        isSuccess: state.loginIn.isSuccess,
        user: state.loginIn.user,
        data:{}
    }),
    (dispatch) => ({

    })
)(EnterpriseAddPage)
