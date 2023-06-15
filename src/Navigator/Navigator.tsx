import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { View } from 'react-native';
import { styled } from 'nativewind';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Settings } from '../screens/Settings';

const Stack = createStackNavigator();
const StyledView = styled(View);
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
				options={({ navigation }) => ({
					title: 'Pomodoro',
					headerRight: () => (
						<TouchableOpacity
							onPress={() => {
								navigation.navigate('Settings');
							}}
						>
							<StyledView className="bg-transparent text-accent-900 mr-2">
								<Icon name="cog" size={20} color={'#47FFDD'} />
							</StyledView>
						</TouchableOpacity>
					),
				})}
			></Stack.Screen>
			<Stack.Screen
				name="Settings"
				component={Settings}
				options={{
					title: 'Settings',
				}}
			></Stack.Screen>
		</Stack.Navigator>
	);
};
