import { create } from 'zustand';

type store = {
	timerState: string;
};

export const useTimerStore = create<store>()((set) => ({
	timerState: 'stopped',
	setTimerState: (newTimerState: string) =>
		set((state) => ({
			timerState: newTimerState,
		})),
}));
