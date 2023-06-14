import { useEffect } from 'react';
import { styled } from 'nativewind';
import { Text, View } from 'react-native';
import { Circle, Svg } from 'react-native-svg';
import { useTimerStore } from '../../store';

type Props = {
	seconds: number;
};

const StyledView = styled(View);
const StyledText = styled(Text);
const CIRCLE_LENGTH = 1000;
const radius = CIRCLE_LENGTH / (2 * Math.PI);
const viewBoxHeight = 400;
const viewBoxWidth = 400;

export const Timer = () => {
	const { timerSecond, setTimerSecond } = useTimerStore();
	useEffect(() => {
		const tick = setInterval(() => {
			setTimerSecond(timerSecond - 1);
		}, 1000);
		return () => {
			clearInterval(tick);
		};
	}, []);
	return (
		<StyledView className="relative flex-1">
			<Svg
				className="fill-primary-900"
				viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
			>
				<Circle
					cx={viewBoxWidth / 2}
					cy={viewBoxHeight / 2}
					r={radius}
					stroke={'#fff'}
					strokeWidth={20}
					strokeDasharray={CIRCLE_LENGTH}
					strokeDashoffset={CIRCLE_LENGTH * 0}
				/>
			</Svg>
			<StyledView className="flex absolute justify-center items-center w-full h-full">
				<StyledText className={`text-white  z-10 text-3xl`}>
					{`${(timerSecond - (timerSecond % 60)) / 60}:${
						timerSecond % 60
					}`}
				</StyledText>
			</StyledView>
		</StyledView>
	);
};
