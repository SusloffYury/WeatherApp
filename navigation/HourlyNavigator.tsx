import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { useSelector } from "react-redux";
import HourlyScreen from "../screens/HourlyScreen";
import YesterdayScreen from "../screens/YesterdayScreen";
import { StackNavigationProp } from "@react-navigation/stack";

const Tab = createMaterialTopTabNavigator();

type TopButtonOptions = {
	TopButton: { title: string };
};
const Stack = createStackNavigator<TopButtonOptions>();

type TopButtonNavigationProp = StackNavigationProp<
	TopButtonOptions,
	"TopButton"
>;
type Props = {
	navigation: TopButtonNavigationProp;
};
const TopButton = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Today" component={HourlyScreen} />
			<Tab.Screen name="Yesterday" component={YesterdayScreen} />
		</Tab.Navigator>
	);
};
const TopButtonNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="City" component={TopButton} options={HourlySign} />
		</Stack.Navigator>
	);
};
const HourlySign = (): object => {
	const { cityName } = useSelector((state) => state.search);

	return {
		title: `${cityName}`,
	};
};
export default TopButtonNavigator;
