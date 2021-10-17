import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import myWorkoutPlan from "./components/myWorkoutPlan";
import myProfile from "./components/myProfile";
import DayPlan from "./components/dayPlan";
import AddExercise from "./components/addExercise";
import * as Font from "expo-font";
import { useFonts } from 'expo-font';

// You can import Ionicons from @expo/vector-icons/Ionicons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import Ionicons from "react-native-vector-icons/Ionicons";
import dayPlan from "./components/dayPlan";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
	return (
	<Tab.Navigator 
				// barStyle={{ backgroundColor: '#000000' }} 
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === "Workout") {
							iconName = focused ? "fitness" : "fitness-outline";
						} else if (route.name === "Profile") {
							iconName = focused ? "person" : "person-outline";
						}

						// You can return any component that you like here!
						return <Ionicons name={iconName} size={size} color={color} />;
					},
					tabBarActiveTintColor: "#bb86fc",
					tabBarInactiveTintColor: "white",
					tabBarStyle: {
					 		backgroundColor: '#222222',
							borderStyle: 'hidden',
					},
				})}
			>
				<Tab.Screen
					name="Workout"
					component={myWorkoutPlan}
					options={{ headerShown: false }}
				/>
				<Tab.Screen name="Profile" component={myProfile} options={{ headerShown: false }}/>
			</Tab.Navigator>
	);
}

export default function App() {
	const [loaded] = useFonts({
		Light: require('./assets/fonts/Montserrat-Light.otf'),
		SemiBold: require('./assets/fonts/Montserrat-SemiBold.otf'),
		Bold: require('./assets/fonts/Montserrat-Bold.otf'),
	  });
	  
	  if (!loaded) {
		return null;
	  }

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }}/>
				<Stack.Screen name="DayPlan" component={DayPlan} options={{ headerShown: false }} />
				<Stack.Screen name="AddExercise" component={AddExercise} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>		
	);
}

