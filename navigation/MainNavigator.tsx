import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DayliNavigator from "./DayliNavigator";
import HourlyNavigator from "./HourlyNavigator";
import CityNav from "./ViewDetail";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { NavigatorScreenParams } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

type TabParamList = {
	Daily: undefined;
	City: undefined;
	Hourly: undefined;
};
const Tab = createBottomTabNavigator<TabParamList>();

const MainNavigator = (props: any) => {
	return (
		<Tab.Navigator screenOptions={props.onLayout}>
			<Tab.Screen
				name="City"
				component={CityNav}
				options={{
					tabBarIcon: ({ color }) => (
						<AntDesign name="home" size={26} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Daily"
				component={DayliNavigator}
				options={{
					tabBarIcon: ({ color }) => (
						<AntDesign name="calendar" size={26} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Hourly"
				component={HourlyNavigator}
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons name="md-time-outline" size={26} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default MainNavigator;
