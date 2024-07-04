// const initialState = [
//    {
//      id: 0,
//      passengerFullName: '',
//      age: '',
//      from: '',
//      to: '',
//      date: '',
//      mealAmount: 0,
//      flightFare: '',
//      totalAmount: '',
//    },
//  ];
 
//  export const bookingDetailsReducer = (state = initialState, action) => {
//    switch (action.type) {
//      case "personDetail":
//        console.log("person details reducer", action.payload);
//        const { firstName, lastName, dob } = action.payload;
//        return state.map((booking) => ({
//          ...booking,
//        }));
 
//      case "flightDetail":
//        console.log("flight details reducer", action.payload);
//        const { fromCity, toCity, bookingFor, age, bookingDate, flightPrice } = action.payload;
//        return state.map((booking) => {
//          if (booking.id === 0) {
//            return {
//              ...booking,
//              passengerFullName: bookingFor,
//              from: fromCity,
//              to: toCity,
//              date: bookingDate,
//              flightFare: flightPrice,
//              age,
//            };
//          }
//          return booking;
//        });
 
//      case "mealFareDetail":
//        console.log("meal fare reducer", action.payload);
//        return state.map((booking) => {
//          if (booking.id === 0) {
//            return {
//              ...booking,
//              mealAmount: action.payload,
//            };
//          }
//          return booking;
//        });
 
//      case "totalFare":
//        console.log("total fare reducer", action.payload);
//        return state.map((booking) => {
//          if (booking.id === 0) {
//            return {
//              ...booking,
//              totalAmount: action.payload,
//            };
//          }
//          return booking;
//        });
 
//      default:
//        return state;
//    }
//  };
 


const initialState = [];

export const bookingDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "personDetail":
      console.log("person details reducer", action.payload);
      const { firstName, lastName, dob } = action.payload;
     
      const newBooking = {
        id: state.length, 
        passengerName: '',
        age: '',
        from: '',
        to: '',
        date: '',
        mealAmount: 0,
        flightFare: '',
        totalAmount: '',
      };
      return [...state, newBooking];

    case "flightDetail":
      console.log("flight details reducer", action.payload);
      const { fromCity, toCity, bookingFor, age, bookingDate, flightPrice } = action.payload;
      const updatedStateFlight = state.map((booking) => {
        if (booking.id === state.length - 1) { // Update the last booking entry
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

    case "mealFareDetail":
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

    case "totalFare":
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
