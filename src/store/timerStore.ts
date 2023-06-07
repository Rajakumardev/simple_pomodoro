import { create } from 'zustand';
import { PASUED } from '../constants';

type store = {
	timerState: string;
	setTimerState: (newTimerState: string) => void;
};

export const useTimerStore = create<store>()((set) => ({
	timerState: PASUED,
	setTimerState: (newTimerState: string) =>
		set((state) => ({
			timerState: newTimerState,
		})),
}));
