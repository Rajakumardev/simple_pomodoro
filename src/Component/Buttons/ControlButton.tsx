import { View } from 'react-native';
import { styled } from 'nativewind';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
	children?: JSX.Element;
	className?: string;
	onPressCallback: () => void;
};

const StyledView = styled(View);

export const ControlButton = ({
	children = <></>,
	className = '',
	onPressCallback,
}: Props) => {
	return (
		<TouchableOpacity onPress={onPressCallback}>
			<StyledView
				className={`text-white bg-accent-900 p-4 rounded-full  shadow-md ${className}`}
			>
				{children}
			</StyledView>
		</TouchableOpacity>
	);
};
