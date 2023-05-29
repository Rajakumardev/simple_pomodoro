import { styled } from 'nativewind';
import { Text, View } from 'react-native';

const StyledView = styled(View);
const StyledText = styled(Text);

export const AppBar = () => {
	return (
		<StyledView className="h-16 flex justify-center px-4">
			<StyledText className="font-bold text-white text-xl">
				Simple Pomodoro
			</StyledText>
		</StyledView>
	);
};
