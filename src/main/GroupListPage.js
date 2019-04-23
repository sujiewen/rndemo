import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity,FlatList} from 'react-native';
import {connect} from 'react-redux';
import { groupData } from "../main/DataSource";
import {THEME_TEXT} from "../assets/css/color";

class GroupListPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            select: 0 ,
            data: groupData
        };
    }

    componentDidMount() {
    }

    render() {
        return (<FlatList
            data={this.state.data}
            renderItem={this.renderIndexPath} />);
    }

    renderIndexPath = (info) => {
        const contact = info.item;
        return (
            this.renderTItem(contact)
        );
    };

    renderTItem(contact) {
        if(contact.type == 1) {
            return (
                <TouchableOpacity style={styles.row} onPress={ () => {}}>
                    <Image defaultSource={require('../assets/images/group_placeholder.png')} source={{uri:contact.url}} style={styles.image} />
                    <View style={styles.rContainer}>
                        <Text style={styles.rowText}>{contact.name}<Text style={{fontSize: 20,marginLeft: 0,color:THEME_TEXT }}>{contact.userCount > 0 ? '('+contact.userCount+')' : '' } </Text></Text>
                    </View>
                    <View style={styles.line} />
                </TouchableOpacity>
            );
        }
        else {
            return (
                <TouchableOpacity style={styles.row} onPress={ () => {} }>
                    <Image defaultSource={require('../assets/images/group_placeholder.png')} source={{uri:contact.url}} style={styles.image} />
                    <View style={styles.rContainer}>
                        <Text style={styles.rowText}>{contact.name}<Text style={{fontSize: 20,marginLeft: 0,color:THEME_TEXT }}>{contact.userCount > 0 ? '('+contact.userCount+')' : '' } </Text></Text>
                    </View>
                    <View style={styles.line} />
                </TouchableOpacity>
            );
        }
    }
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

    rowText: {
        fontSize: 20,
        marginLeft: 10,
        alignSelf: "center"
    },
    sectionTitle: { fontSize: 18 },

    rContainer: { marginLeft: 20,flexDirection:'row-reverse' },
    sImage: { marginLeft: 20, width: 44, height: 44 },
    row: { flexDirection: "row", alignItems: "center",height:80},
    image: { marginLeft: 40, width: 44, height: 44, borderRadius: 4},
    title: { fontSize: 18 },
    subtitle: { fontSize: 14, marginTop: 8 },
});

export default connect(
    (state) => ({
        status: state.loginIn.status,
        isSuccess: state.loginIn.isSuccess,
        user: state.loginIn.user
    }),
    (dispatch) => ({

    })
)(GroupListPage)