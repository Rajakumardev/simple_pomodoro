import React from 'react';
import { styled } from 'nativewind';
import { Text, View } from 'react-native';
import { Svg, Circle } from 'react-native-svg';
import { ControlButton } from '../Component';
import Icon from 'react-native-vector-icons/FontAwesome5';

const StyledView = styled(View);
const StyledText = styled(Text);
const CIRCLE_LENGTH = 1000;
const radius = CIRCLE_LENGTH / (2 * Math.PI);
const viewBoxHeight = 400;
const viewBoxWidth = 400;

export const Home = (): JSX.Element => {
	return (
		<StyledView className="bg-primary-900 flex-1">
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
						25:00
					</StyledText>
				</StyledView>
			</StyledView>
			<StyledView className="flex-1 px-4 flex">
				<StyledView className="flex flex-row items-start justify-between">
					<ControlButton
						className="text-xl w-20 h-20 flex justify-center 
							items-center border-2 border-white"
					>
						<Icon name="play" size={20} color={'#fff'} />
					</ControlButton>
					<ControlButton
						className="text-xl w-20 h-20 flex justify-center 
							items-center border-2 border-white"
					>
						<Icon name="pause" size={20} color={'#fff'} />
					</ControlButton>
					<ControlButton
						className="text-xl w-20 h-20 flex justify-center 
							items-center border-2 border-white"
					>
						<Icon name="forward" size={20} color={'#fff'} />
					</ControlButton>
				</StyledView>
			</StyledView>
		</StyledView>
	);
};
