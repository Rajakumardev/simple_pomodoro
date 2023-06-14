import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';

const Stack = createStackNavigator();

const screenOptions = {
	headerShown: true,
	headerStyle: {
		backgroundColor: '#030807',
		elevation: 0,
	},
	headerTintColor: '#47FFDD',
};

export const Navigator = (): JSX.Element => {
	return (
		<Stack.Navigator screenOptions={screenOptions}>
			<Stack.Screen
				name="Home"
				component={Home}
				options={{
					title: 'Pomodoro',
				}}
			></Stack.Screen>
		</Stack.Navigator>
	);
};
