import React from 'react';
import { styled } from 'nativewind';
import { Text, View } from 'react-native';
import { Svg, Circle } from 'react-native-svg';
import { ControlButton } from '../Component';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTimerStore } from '../store';
import { PASUED, PLAYING } from '../constants';
import { Timer } from '../Component/Timer/Timer';

const StyledView = styled(View);

export const Home = (): JSX.Element => {
	const { timerState, setTimerState } = useTimerStore();

	const onControlBtnPress = (newTimerState = timerState) => {
		setTimerState(newTimerState);
	};

	return (
		<StyledView className="bg-primary-900 flex-1">
			<Timer />
			<StyledView className="flex-1 px-4 flex">
				<StyledView className="flex flex-row items-start justify-between">
					<ControlButton
						onPressCallback={() => onControlBtnPress(PLAYING)}
						className="text-xl w-20 h-20 flex justify-center 
							items-center border-4 border-accent-900"
					>
						<Icon name="play" size={20} color={'#47FFDD'} />
					</ControlButton>
					<ControlButton
						onPressCallback={() => onControlBtnPress(PASUED)}
						className="text-xl w-20 h-20 flex justify-center 
							items-center border-4 border-accent-900"
					>
						<Icon name="pause" size={20} color={'#47FFDD'} />
					</ControlButton>
					<ControlButton
						onPressCallback={() => onControlBtnPress(PASUED)}
						className="text-xl w-20 h-20 flex justify-center 
							items-center border-4 border-accent-900"
					>
						<Icon name="forward" size={20} color={'#47FFDD'} />
					</ControlButton>
				</StyledView>
			</StyledView>
		</StyledView>
	);
};
