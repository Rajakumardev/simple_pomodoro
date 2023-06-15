import { View, Text } from 'react-native';
import React from 'react';
import { styled } from 'nativewind';

const StyledView = styled(View);

export const Settings = () => {
	return (
		<StyledView className="bg-primary-900 flex-1">
			<Text>Settings</Text>
		</StyledView>
	);
};
