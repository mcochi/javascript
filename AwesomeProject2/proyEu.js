import React from "react";
import {
StyleSheet,
View,
ActivityIndicator,
FlatList,
Text,
TouchableOpacity,
Button, Header, Icon, 
TextInput
} from "react-native";
import MoreInfoButton from './linkingbutton'
import { Container, Form, Item, Input, Label } from 'native-base';

export default class ProyEu extends React.Component {
    static navigationOptions = ({ navigation }) => {
    return {
        title: "Source Listing",
        headerStyle: {backgroundColor: "#fff"},
        headerTitleStyle: {textAlign: "center",flex: 1}
    };
    };
    constructor(props) {
        super(props);
        this.state = {
        loading: true,
        dataSource:[],
        searchword:'',
        finaldata: []
        };
    }

    componentDidMount(){ 
        fetch("http://79.153.17.195:3002/ProyEu")
        .then(response => response.json())
        .then((responseJson)=> {
            this.setState({
            loading: false,
            dataSource: responseJson
        })
        })
        .catch(error=>console.log(error)) //to catch the errors if any
        }

    FlatListItemSeparator = () => {
        return (
        <View style={{
            height: .5,
            width:"100%",
            backgroundColor:"rgba(0,0,0,0.5)",
    }}
    />
    );
    }

    renderItem=(data)=> {
        return(
        <TouchableOpacity style={styles.list}>
        <Text style={styles.lightText}>{data.item.Id}</Text>
        <Text style={styles.lightText}>{data.item.Deadline}</Text>
        <Text style={styles.lightText}>{data.item.title}</Text>
        <MoreInfoButton url={data.item.Id.toString()}/></TouchableOpacity>
        );
    }
    mysearchhandler = (text) => {
        this.setState({searchword: text})
    }
    render(){
        if(this.state.loading){
        return( 
            <View style={styles.loader}> 
            <ActivityIndicator size="large" color="#0c9"/>
            </View>
        )}
        return(
        <Container>
        <Container>
        <View style={styles.container}>
        <TextInput 
            style={{ height: 40,borderColor: 'gray', borderWidth: 1}}
            onChangeText={text => this.mysearchhandler(text)}
            />
            <FlatList
                data= {this.state.dataSource.filter(data => data.title.toString().indexOf(this.state.searchword) >= 0)}
                ItemSeparatorComponent = {this.FlatListItemSeparator}
                renderItem= {item=> this.renderItem(item)}
                keyExtractor= {item=>item.Id.toString()}
            />
            </View>
            </Container>
            </Container>
        )}
        }
        const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#fff"
        },
        loader:{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff"
        },
        list:{
            paddingVertical: 4,
            margin: 5,
            backgroundColor: "#fff"
        },
        button:{
            width:'50%'
        }
});
