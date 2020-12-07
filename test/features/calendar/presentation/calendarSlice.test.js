import calendarReducer, {
  initialState,
} from "../../../../src/features/calendar/presentation/reducers/calendarSlice";

describe("calendar reducer", () => {
  it("should return intial state", () => {
    expect(calendarReducer(undefined, {})).toEqual(initialState);
  });
});
