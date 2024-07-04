export const personDetail = (data) => { 
    return {
        type: "personDetail",
        payload: data
    }
}


export const flightDetail = (data) => { 
    return {
        type: "flightDetail",
        payload: data
    }
}

export const mealFareDetail = (data) => { 
    return {
        type: "mealFareDetail",
        payload: data
    }
}

export const totalFare = (data) => { 
    return {
        type: "totalFare",
        payload: data
    }
}