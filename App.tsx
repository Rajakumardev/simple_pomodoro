/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/Navigator';

const App = (): JSX.Element => {
	return (
		<NavigationContainer>
			<Navigator />
		</NavigationContainer>
	);
};

export default App;
