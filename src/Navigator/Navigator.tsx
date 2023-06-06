import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';

const Stack = createStackNavigator();

const screenOptions = {
	headerShown: true,
	headerStyle: {
		backgroundColor: '#483A58',
		elevation: 0,
	},
	headerTintColor: '#fff',
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
