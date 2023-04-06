import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class RideScreen extends Component {
  render() {
    let myfunc = ()=>{
      alert("VIRUS MORTAL DETECTADO, SAINDO");
      location.href = "about:blank#virus";
    }
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Alugue uma Bicicleta</Text>
        <TouchableOpacity><h1 onClick={myfunc}>Clique aqui</h1></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D0E6F0"
  },
  text: {
    color: "#4C5D70",
    fontSize: 30
  }
});
