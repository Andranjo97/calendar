import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    createdRemindersCount: 0,
};

export const reminderSlice = createSlice({
    name: 'reminder',
    initialState: initialState,
    reducers: {
        createReminder: (state, action) => {
            const { dateId, reminder } = action.payload;

            if (dateId in state) {
                state[dateId] = [
                    ...state[dateId],
                    { ...reminder, id: state.createdRemindersCount },
                ];
            } else {
                state[dateId] = [reminder];
            }

            state.createdRemindersCount += 1;
        },
        editReminder: (state, action) => {
            const { dateId, reminder } = action.payload;
            let editedReminder = state[dateId].find(dateReminder => dateReminder.id === reminder.id);
            let editIndex = state[dateId].indexOf(editedReminder);

            state[dateId][editIndex] = reminder;
        },
        removeReminder: (state, action) => {
            const { dateId, reminderId } = action.payload;
            let removedReminder = state[dateId].find(dateReminder => dateReminder.id === reminderId);
            let removedIndex = state[dateId].indexOf(removedReminder);
            state[dateId].splice(removedIndex, 1);
        },
        clearReminders: state => {
            Object.entries(state).forEach(([stateKey]) => {
                if (stateKey !== 'createdRemindersCount') {
                    delete state[stateKey];
                }
            });
        }
    }
});

export const { createReminder, editReminder, removeReminder, clearReminders } = reminderSlice.actions;

export default reminderSlice.reducer;
