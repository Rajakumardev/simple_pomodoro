import React from 'react';
import { styled } from 'nativewind';
import { Text, View } from 'react-native';

import { AppBar } from '../Component';

const StyledView = styled(View);
const StyledText = styled(Text);

export const Home = (): JSX.Element => {
	return (
		<StyledView className="bg-primary-900 flex-1">
			<AppBar />
		</StyledView>
	);
};
