import { PERSON_DETAIL, FLIGHT_DETAIL, MEAL_FARE_DETAIL, TOTAL_FARE } from "../../constant";

const initialState = [];

export const bookingDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PERSON_DETAIL:
      console.log("person details reducer", action.payload);
      const { firstName, lastName, dob } = action.payload;
     
      const newBooking = {
        id: state.length, 
        passengerName: firstName + " " + lastName,
        dob,
        age: '',
        from: '',
        to: '',
        date: '',
        mealAmount: 0,
        flightFare: '',
        totalAmount: '',
      };
      return [...state, newBooking];

    case FLIGHT_DETAIL:
      console.log("flight details reducer", action.payload);
      const { fromCity, toCity, bookingFor, age, bookingDate, flightPrice } = action.payload;
      const updatedStateFlight = state.map((booking) => {
        if (booking.id === state.length - 1) {
          return {
            ...booking,
            passengerName: bookingFor,
            from: fromCity,
            to: toCity,
            date: bookingDate,
            flightFare: flightPrice,
            age,
          };
        }
        return booking;
      });
      return updatedStateFlight;

    case MEAL_FARE_DETAIL:
      console.log("meal fare reducer", action.payload);
      const updatedStateMeal = state.map((booking) => {
        if (booking.id === state.length - 1) {
          return {
            ...booking,
            mealAmount: action.payload,
          };
        }
        return booking;
      });
      return updatedStateMeal;

    case TOTAL_FARE:
      console.log("total fare reducer", action.payload);
      const updatedStateTotal = state.map((booking) => {
        if (booking.id === state.length - 1) {
          return {
            ...booking,
            totalAmount: action.payload,
          };
        }
        return booking;
      });
      return updatedStateTotal;

    default:
      return state;
  }
};
