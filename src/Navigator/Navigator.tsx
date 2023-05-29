import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';

const Stack = createStackNavigator();

export const Navigator = (): JSX.Element => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={Home}></Stack.Screen>
		</Stack.Navigator>
	);
};
