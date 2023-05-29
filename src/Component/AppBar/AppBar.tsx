import { styled } from 'nativewind';
import { Text, View } from 'react-native';

const StyledView = styled(View);
const StyledText = styled(Text);

export const AppBar = () => {
	return (
		<StyledView>
			<StyledText>Simple Pomodoro</StyledText>
		</StyledView>
	);
};
