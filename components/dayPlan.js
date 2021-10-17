import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';

const dayPlan = () => {
  const navigation = useNavigation();
  const [rightDay, setrightDay] = useState('');
  const [title, setTitle] = useState('');

  useEffect (()=> {
    getData();
  });

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('day');
      const value2 = await AsyncStorage.getItem('title');
      console.log(value, value2);
      setrightDay(value);
      setTitle(value2);
    }
    catch (e){
      console.log(e);
    }
  }

  return (
    <View style={styles.background}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back-outline" size={32} color="#bb86fc" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{rightDay} : {title}</Text>
      </View>

      <View style={styles.exerciseBox}>
        <View style={styles.exerciseBoxTop}>
          <BouncyCheckbox
            size={24}
            fillColor="#018786"
            unfillColor="transparent"
            isChecked={false}
            text="Bicep Curls"
            // disableText={true}
            iconStyle={{ borderColor: "#018786" }}
            style={styles.checkbox}
            textStyle={{ fontFamily: "Light", fontSize: 16, color: "#bb86fc" }}
            // onPress={(isChecked: boolean) => {}}
          />
          <View style={styles.exerciseBoxBottom}>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="weight-kilogram"
                size={18}
                color="gray"
              />
              <Text style={styles.exerciseBoxBottomText}>20</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="repeat" size={20} color="gray" />
              <Text style={styles.exerciseBoxBottomText}>8</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="close" size={20} color="gray" />
              <Text style={styles.exerciseBoxBottomText}>3</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={{alignSelf: "center" }}>
        <MaterialCommunityIcons name="chevron-right-circle" size={30} color="#bb86fc" />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.addExercise}
          onPress={() => navigation.navigate("AddExercise")}
        >
          Add Exercise
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addRest}
          onPress={() => navigation.navigate("DayPlan")}
        >
          Add Rest
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default dayPlan;

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

  exerciseBox: {
    backgroundColor: "rgba(255,255,255,0.1)",
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flexDirection: "row",
  },

  exerciseBoxTop: {
    flexDirection: "column",
    width: "85%",
    paddingRight: 15,
  },

  exerciseBoxBottom: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingBottom: 4,
    justifyContent: "space-evenly",
  },

  exerciseBoxBottomText: {
    fontFamily: "Light",
    fontSize: 12,
    color: "gray",
    paddingLeft: 2,
    alignSelf: "center",
  },

  checkbox: {
    paddingLeft: 10,
    paddingTop: 8,
    paddingBottom: 4,
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
  },

  addExercise: {
    // borderWidth: 2,
    backgroundColor: "#bb86fc",
    borderRadius: 15,
    alignSelf: "center",
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 6,
    color: "white",
    fontFamily: "SemiBold",
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
});
