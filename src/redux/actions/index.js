import { PERSON_DETAIL, FLIGHT_DETAIL, MEAL_FARE_DETAIL, TOTAL_FARE } from "../../constant"


export const personDetail = (data) => { 
    return {
        type: PERSON_DETAIL,
        payload: data
    }
}


export const flightDetail = (data) => { 
    return {
        type: FLIGHT_DETAIL,
        payload: data
    }
}

export const mealFareDetail = (data) => { 
    return {
        type: MEAL_FARE_DETAIL,
        payload: data
    }
}

export const totalFare = (data) => { 
    return {
        type: TOTAL_FARE,
        payload: data
    }
}