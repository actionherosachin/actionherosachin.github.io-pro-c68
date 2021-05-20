import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "./screens/Homescreen";
import FacebookScreen from "./screens/FacebookScreen";
import ImstagramScreen from "./screens/ImstagramScreen";

export default class App extends React.Component {
  render() {
    
    return <AppContainer /> 
    
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: { screen: FacebookScreen },
  Imstagram: { screen: ImstagramScreen },
 
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});