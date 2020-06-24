import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, Alert, FlatList } from 'react-native';
import {Card, TextInput, Button} from 'react-native-paper'
import { exp } from 'react-native-reanimated';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const Login =({navigation})=> {
	const [data, setData] = useState([])
    const [voterID, setvoterID] = useState('')
    const [loading, setloading] = useState(true)

    const fetchData = () => {
        fetch("http://10.0.2.2:3000/")
        .then(res => res.json())
        .then(results => {
            //console.log(results)
            setData(results)
            setloading(false)
        }).catch(err => {
            Alert.alert("Something went wrong")
        })
    }

    useEffect(() => {
        fetchData()
    }, [])
     const renderList = ((item) => {
        const vali = () => {
            if (voterID == `${item.userId}`) {
                navigation.navigate("Profile", {item})
            } else {
                Alert.alert("Your Voter's ID is wrong")
            }
        }
        return (
            <ImageBackground
            style={styles.ImgStyle}
                source = {{uri:'https://images.unsplash.com/photo-1534293230397-c067fc201ab8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}}
                //resizeMode = 'contain'
                >
                <View style = {styles.cardStyle}>
                    <TextInput
                        label = "Voter's ID"
                        //value = {voterID}
                        mode = "outlined"
                        theme = {{colors:{primary: '#b02c30'}}}
                        onChangeText = {text => setvoterID(text)}
                    />
                    <Button
                        style = {styles.btnStyle}
                        icon="login"
                        mode="contained"
                        labelStyle = ""
                        theme = {{colors:{primary: '#8f8d88'}}}
                        onPress={() => vali()}
                        >
                        LOGIN
                    </Button>

                </View>

        </ImageBackground>
        )
    })

	return(
        <View>
            <FlatList 
                        data = {data}
                        renderItem = {({item}) => {
                            return renderList(item)
                        }}
                        keyExtractor = {item => `${item._id}`}
                        onRefresh = {() => fetchData()}
                        refreshing = {loading}
                        
            />
        </View>
	    )
}
export default Login

const styles = StyleSheet.create({
    ImgStyle: {
        flex: 1,
        width: width,
        height: height,
    },
    cardStyle: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 10,
    },
    btnStyle: {
        marginTop: 10,
    }
})