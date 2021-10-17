import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const addExercise = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.background}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back-outline" size={32} color="#bb86fc" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Exercise</Text>
      </View>
        <SafeAreaView>
        <TextInput style={styles.input} placeholder="Exercise Name" />
        <TextInput style={styles.input} placeholder="Weight" />
        <TextInput style={styles.input} placeholder="Reps" />
        <TextInput style={styles.input} placeholder="Sets" />
        <TextInput style={styles.input} placeholder="Time" />
        </SafeAreaView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.addRest} onPress={() => navigation.navigate("DayPlan")}>Done</TouchableOpacity>
      </View>
    </View>
  );
};

export default addExercise;

const styles = StyleSheet.create({

  background: {
    backgroundColor: "#121212",
    flex: 1,
  },

  backIcon: {
    // alignItems: "center",
    padding: 10,
  },
  headerTitle: {
    color: "#ffffff",
    alignSelf: "center",
    fontFamily: "SemiBold",
    fontSize: 16,
  },
  footer: {
    position: "absolute",
    left: 0,
    bottom: 0,
    height: 80,
    width: "100%",
    zIndex: 1,
    backgroundColor: "#121212",
    flexDirection: "row",
    justifyContent: "space-evenly",
    fontFamily: "",
  },

  addExercise: {
    borderWidth: 2,
    borderColor: "#bb86fc",
    borderRadius: 15,
    alignSelf: "center",
    fontSize: 14,
    paddingHorizontal: 8,
    paddingVertical: 4,
    color: "white",
    fontFamily: "Light",
  },

  addRest: {
    // borderWidth: 2,
    backgroundColor: "#018786",
    borderRadius: 15,
    alignSelf: "center",
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 6,
    color: "white",
    fontFamily: "SemiBold",
  },

  input:{
    // borderWidth: StyleSheet.hairlineWidth,
    borderWidth: 2,
    borderColor: "#bb86fc",
    borderRadius: 10,
    height: 40,
    marginTop: 8,
    marginHorizontal: 10,
    paddingHorizontal: 8,
    fontSize: 14,
    backgroundColor: 'transparent',
    fontFamily: 'Light',
    color: 'white',
  },
});
