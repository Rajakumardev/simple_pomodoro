import { create } from 'zustand';
import { PASUED } from '../constants';

type store = {
	timerState: string;
	timerSecond: number;
	setTimerState: (newTimerState: string) => void;
	setTimerSecond: (newTimerSecond: number) => void;
};

export const useTimerStore = create<store>()((set) => ({
	timerSecond: 100,
	timerState: PASUED,
	setTimerState: (newTimerState: string) =>
		set((state) => ({
			timerState: newTimerState,
		})),
	setTimerSecond: (newTimerSecond: number) =>
		set((state) => ({
			timerSecond: newTimerSecond,
		})),
}));
