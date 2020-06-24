import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Card, Button} from 'react-native-paper';

const MddVote = ({navigation, rout}) => {
    return (
        <View style = {styles.root}>
            <View  style = {styles.textStyle}>
                <Text>President</Text>
            </View>
            <View>
                <Card style = {{margin: 3, padding: 5}}>
                    <Image 
                        style = {{height:50, width: 50, borderRadius: 25}}
                        source = {{uri: "https://images.unsplash.com/photo-1560714759-60e6eb4e1db6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"}}
                    />
                </Card>
            </View>

            <View>
                <Card style = {{margin: 3, padding: 5}}>
                    <Image 
                        style = {{height:50, width: 50, borderRadius: 25}}
                        source = {{uri: "https://images.unsplash.com/photo-1573166475912-1ed8b4f093d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"}}
                    />
                </Card>
            </View>

            <View  style = {styles.vicetextStyle}>
                <Text>Vice President</Text>
            </View>  

            <View>
                <Card style = {{margin: 3, padding: 5}}>
                    <Image 
                        style = {{height:50, width: 50, borderRadius: 25}}
                        source = {{uri: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"}}
                    />
                </Card>
            </View>

            <View>
                <Card style = {{margin: 3, padding: 5}}>
                    <Image 
                        style = {{height:50, width: 50, borderRadius: 25}}
                        source = {{uri: "https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"}}
                    />
                </Card>
            </View>

            <View  style = {styles.vicetextStyle}>
                <Text>Department Leader</Text>
            </View>  

            <View>
                <Card style = {{margin: 3, padding: 5}}>
                    <Image 
                        style = {{height:50, width: 50, borderRadius: 25}}
                        source = {{uri: "https://images.unsplash.com/photo-1539025828301-b314ca222fa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"}}
                    />
                </Card>
            </View>

            <View>
                <Card style = {{margin: 3, padding: 5}}>
                    <Image 
                        style = {{height:50, width: 50, borderRadius: 25}}
                        source = {{uri: "https://images.unsplash.com/photo-1559138741-441acdebf148?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"}}
                    />
                </Card>
            </View>
            
            <View style={styles.viewButton}>
                <Button icon="check-bold" mode="contained" onPress={() => console.log('saved!')}>
                    Click to Vote
                </Button>
            </View>
        </View>
    )
}

export default MddVote

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    textStyle: {
        alignItems: 'center'
        //flexDirection: 'row',
        //fontSize: 20
    },
    vicetextStyle: {
        alignItems: 'center',
        margin: 3
    },
    viewButton: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        padding: 5,
        marginTop: 20
    }
})