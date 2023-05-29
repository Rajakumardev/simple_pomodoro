import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';

const Stack = createStackNavigator();

const screenOptions = {
	headerShown: false,
};

export const Navigator = (): JSX.Element => {
	return (
		<Stack.Navigator screenOptions={screenOptions}>
			<Stack.Screen name="Home" component={Home}></Stack.Screen>
		</Stack.Navigator>
	);
};
