import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity,FlatList} from 'react-native';
import {connect} from 'react-redux';
import { personData } from "../main/DataSource";
import ImagePlaceholder from '../common/ImagePlaceholder'

class PersonAddPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            select: 0 ,
            data: personData
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
        return (
            <TouchableOpacity style={styles.row} onPress={ () => {}}>
                <Image defaultSource={require('../assets/images/group_placeholder.png')} source={{uri:contact.portraitUrl}} style={styles.image} />
                <View style={styles.rContainer}>
                    <Text style={styles.rowText}>{contact.name}</Text>
                    <Text style={styles.subtitle} numberOfLines={1}>{contact.postInfo}</Text>
                </View>
                <View style={styles.line} />
            </TouchableOpacity>
        );
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
    },
    sectionTitle: { fontSize: 18 },

    rContainer: { marginLeft: 20 },
    sImage: { marginLeft: 20, width: 44, height: 44 },
    row: { flexDirection: "row", alignItems: "center",height:80},
    image: { marginLeft: 40, width: 44, height: 44, borderRadius: 4},
    title: { fontSize: 18 },
    subtitle: { fontSize: 14, marginTop: 8 , marginRight: 20},
});

export default connect(
    (state) => ({
        status: state.loginIn.status,
        isSuccess: state.loginIn.isSuccess,
        user: state.loginIn.user
    }),
    (dispatch) => ({

    })
)(PersonAddPage)