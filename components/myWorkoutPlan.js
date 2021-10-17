import React from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";

const DATA = [
  {
    id: "0",
	day: "MON",
  dayRight:'Monday',
    title: "Arms & Chest",
  },
  {
    id: "1",
	day: "TUE",
  dayRight:'Tuesday',
    title: "Legs & Core",
  },
  {
    id: "2",
	day: "WED",
  dayRight:'Wednesday',
    title: "Rest Day",
  },  
  {
    id: "3",
	day: "THU",
  dayRight:'Thursday',
    title: "Arms & Chest",
  },
  {
    id: "4",
	day: "FRI",
  dayRight:'Friday',
    title: "Legs & Core",
  },
  {
    id: "5",
	day: "SAT",
  dayRight:'Saturday',
    title: "Morning Run",
  },
  {
    id: "6",
	day: "SUN",
  dayRight:'Sunday',
    title: "Rest Day",
  }
];

const storeData = async (value1, value2) => {
  
  try {
      await AsyncStorage.setItem('title', value1);
      console.log(value1);
      await AsyncStorage.setItem('day', value2);
      console.log(value2);
    } 
      catch (e) {
          console.log(e);
        }
};

const Item = ({ title, day, dayRight }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => storeData(title, dayRight).then(navigation.navigate("DayPlan")) }
      style={styles.item}
    >
      <View style={styles.dayContent}>
        <Text style={styles.dayLabel}>{day}</Text>
        <Text style={styles.dayTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const myWorkoutPlan = () => {
  const renderItem = ({ item }) => <Item title={item.title} day={item.day} dayRight={item.dayRight} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>The Workout Plan</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#121212",
  },
  heading: {
    fontSize: 24,
	fontFamily: "Bold",
    alignSelf: "center",
    color: "#FFFFFF",
    marginBottom: 8,
    marginTop: 12,

  },
  item: {
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,

    // shadowColor: '#FFcc44',
    // shadowOffset: {
    //   width: 0,
    //   height: 6,
    // },
    // shadowOpacity: 0.37,
    // shadowRadius: 7.49,
    // elevation: 12,
  },
  dayTitle: {
    fontSize: 14,
    paddingHorizontal: 8,
	paddingVertical: 3,
    color: "white",
	marginLeft: 10,
	borderColor: "#bb86fc",
	borderStyle: 'solid',
	borderWidth: 2,
	borderRadius: 15,
	textAlign: "center",
	fontFamily: "Light",
  },
  dayContent: {
    flexDirection: "row",
  },
  dayLabel: {
    backgroundColor: "#018786",
    borderRadius: 5,
    fontSize: 12,
    fontWeight: 700,
    color: "white",
	width: 40,
	height: 20,
	textAlign: "center",
	alignSelf: "center",
	paddingTop: 3,
	fontFamily: "SemiBold",
  
  },
});

export default myWorkoutPlan;
