import React, { Component,useState } from 'react'

import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, FlatList, Modal, Pressable} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Colors from '../Constants/Colors';
import tempData from '../Constants/tempData';
import ToDoList from './ToDoList';
import ToDoScrrenItems from './ToDoScreenItems'
import ToDoScreenItems from './ToDoScreenItems';

export default class ToDo extends React.Component {
 


  render() {

    
   
    return (
      <View style={styles.container}>
           
             <Text style={styles.text}>To Do Lists</Text>

                
        <View style={{ height: 600, paddingRight: 12, paddingLeft: 12, }}>
          <FlatList
            data={tempData}
            keyExtractor={item => item.name}
            vertical={true}

            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <ToDoScreenItems list={item} />
            )}
          />
        </View>
        <View style={{ marginVertical: 18, marginHorizontal: 3, height: 10, width: 100, alignSelf: "center" }}>
          <TouchableOpacity style={styles.addList}>
            <AntDesign name="plus" size={16} color={Colors.blue} />
           
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8D90CB',
      },
      girl1: {
        flex: 1,
        justifyContent: "center"
      },
      text: {
        color: "white",
        fontSize: 22,
        lineHeight: 84,
        fontWeight: "thin",
        textAlign: "center",
    
        // backgroundColor: "#000000c0"
      },
    
      title: {
        alignItems: "center",
        // marginTop: 200
      },
      addList: {
        borderWidth: 2,
        borderColor: Colors.lightBlue,
        borderRadius: 40,
        padding: 12,
        alignItems: "center",
        // justifyContent: "center"
      },
      add: {
        color: Colors.blue,
        fontWeight: "600",
        fontSize: 14,
        marginTop: 8
      },
     
});
