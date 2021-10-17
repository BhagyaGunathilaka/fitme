import React, { Component } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Colors from '../Constants/Colors';
import tempData from '../Constants/tempData';

export default class Calandar extends React.Component {
  backgroundColors = ["#F4DCD0", "#E7C1CE", "#B6B3C4", "#AAC9CE"];
  
  state={
    name: "",
    color: this.backgroundColors[0]
  };

  createTodo = () => {
    const {name, color} = this.state

    tempData.push({
      name,
      color,
      todos: []
    });

    this.setState({ name: ""});
    
  }

  renderColors(){
    return this.backgroundColors.map(color=>{
      return(
        <TouchableOpacity 
          key={color} 
          style={[styles.colorSelect, {backgroundColor: color}]} 
          onPress={()=> this.setState({color})}
        />
      )
    })
  }




  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
         <View style={{alignSelf:"stretch", marginHorizontal: 32}}>
            <Text style={styles.title}>Create Todo List</Text>
            <TextInput style={styles.input} placeholder="List name.." onChangeText={text => this.setState({name:text})}/>

            <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 12}}>
              {this.renderColors()}
            </View>

            <TouchableOpacity 
              style={[styles.create, {backgroundColor: this.state.color}]}
              onPress={this.createTodo}
              >
              <Text style={{color: Colors.white, fontWeight: "600", fontSize: 20}}>Create!</Text>
            </TouchableOpacity>

         </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
      container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#8D90CB',
      },
      title: {
        color: "white",
        fontSize: 22,
        lineHeight: 84,
        fontWeight: "thin",
        textAlign: "center",
      },
      input:{
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.white,
        borderRadius: 6,
        height: 50,
        marginTop: 8,
        paddingHorizontal: 16,
        fontSize:18,
        backgroundColor: Colors.white
      },
      create: {
        marginTop: 44,
        height: 50,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        width: 200
      },
      colorSelect: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginTop: 30

      }
});
