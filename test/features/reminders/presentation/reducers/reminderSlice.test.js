import reminderReducer, { initialState } from "../../../../../src/features/remiders/presentation/reducers/reminderSlice";

describe('reminder reducer', function () {
    it('should return initial state', () => {
        expect(reminderReducer(undefined, {})).toEqual(initialState)
    });

    it('should create reminder', () => {
       let reminder = {
           id: 0,
           color: '#000',
           description: 'test',
       };
       let dateId = 'dateId';
       let expectedState = {
           createdRemindersCount: 1,
           dateId: [reminder],
       };

       let action = {
           type: 'reminder/createReminder',
           payload: {
               reminder,
               dateId,
           }
       };

       let resultState = reminderReducer(initialState, action);

        expect(resultState).toEqual(expectedState);
        expect(resultState[dateId].length).toEqual(1);
        expect(resultState[dateId][0]).toEqual(reminder);
    });

    it('should edit reminder', () => {
        let reminder = {
            id: 0,
            color: '#000',
            description: 'test edit',
        };
        let dateId = 'dateId';
        let newInitialState = {
            createdRemindersCount: 1,
            dateId: [
                {
                    id: 0,
                    color: '#000',
                    description: 'test',
                },
            ]
        };
        let expectedState = {
           createdRemindersCount: 1,
           dateId: [reminder],
        };
       let action = {
           type: 'reminder/editReminder',
           payload: {
               reminder,
               dateId,
           }
       };

       let resultState = reminderReducer(newInitialState, action);

        expect(resultState).toEqual(expectedState);
        expect(resultState.createdRemindersCount).toEqual(1);
        expect(resultState[dateId].length).toEqual(1);
        expect(resultState[dateId][0]).toEqual(reminder);
    });

    it('should remove reminder', function () {
        let dateId = 'dateId';
        let reminderId = 0;
        let newInitialState = {
            createdRemindersCount: 1,
            dateId: [
                {
                    id: 0,
                    color: '#000',
                    description: 'test',
                },
            ]
        };
        let action = {
            type: 'reminder/removeReminder',
            payload: {
                reminderId,
                dateId,
            }
        };
        let expectedState = {
            createdRemindersCount: 1,
            dateId: [],
        };

        let resultState = reminderReducer(newInitialState, action);

        expect(resultState).toEqual(expectedState);
        expect(resultState.createdRemindersCount).toEqual(1);
        expect(resultState[dateId].length).toEqual(0);
    });

    it('should clear reminders', function () {
        let newInitialState = {
            createdRemindersCount: 1,
            dateId: [
                {
                    id: 0,
                    color: '#000',
                    description: 'test',
                },
            ]
        };
        let action = { type: 'reminder/clearReminders' };
        let expectedState = {
            createdRemindersCount: 1,
        };

        let resultState = reminderReducer(newInitialState, action);

        expect(resultState).toEqual(expectedState);
    });
});
