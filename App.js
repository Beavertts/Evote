import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Department from './screens/Department';
import WddVote from './screens/WddVote';
import GddVote from './screens/GddVote';
import MddVote from './screens/MddVote';
import Biometric from './screens/Biometric';
import Verify from './screens/Verify';
import Login from './screens/Login';
import WddVoteSecondPage from './screens/WddVoteSecondPage';
import WddVoteThirdPage from './screens/WddVoteThirdPage';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



const Stack = createStackNavigator();


function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={Home}
            options = {{
              title: "Employee's Home",
              headerTintColor: "white",
                headerStyle: {
                  backgroundColor: "#006aff",
              }
          }}
          />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options = {{
            title: "Employee's Home",
            headerTintColor: "white",
              headerStyle: {
                backgroundColor: "#006aff",
            }
        }}
          />
          <Stack.Screen
            name = "Department"
            component = {Department}
            options = {{
              title: "Choose Your Department",
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: "#006aff"
              }
            }}  
          />
          <Stack.Screen
            name = "WddVote"
            component = {WddVote}
            options = {{
              title: "Web Development Voting Section",
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: "#006aff"
              }
            }}  
          />
          <Stack.Screen
            name = "GddVote"
            component = {GddVote}
            options = {{
              title: "Graphic Design Development Voting Section",
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: "#006aff"
              }
            }}  
          />
          <Stack.Screen
            name = "MddVote"
            component = {MddVote}
            options = {{
              title: "Mobile Development Voting Section",
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: "#006aff"
              }
            }}  
          />
          <Stack.Screen
            name = "Biometric"
            component = {Biometric}
            options = {{
              title: "FingerPrint",
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: "#006aff"
              }
            }}  
          />
          <Stack.Screen
            name = "WddVoteSecondPage"
            component = {WddVoteSecondPage}
            options = {{
              title: "Vote",
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: "#006aff"
              }
            }}  
          />
          <Stack.Screen
            name = "WddVoteThirdPage"
            component = {WddVoteThirdPage}
            options = {{
              title: "Vote",
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: "#006aff"
              }
            }}  
          />
          <Stack.Screen
            name = "Verify"
            component = {Verify}
            options = {{
              title: "Vote",
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: "#006aff"
              }
            }}  
          />
          <Stack.Screen
            name = "Login"
            component = {Login}
            options = {{
              title: "Vote",
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: "#006aff"
              }
            }}  
          />
      </Stack.Navigator>
    </View>
  );
}

export default () => {
  return (
    <NavigationContainer>
        <App />
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbbb63',
    //marginTop: Constants.statusBarHeight,
  },
});
