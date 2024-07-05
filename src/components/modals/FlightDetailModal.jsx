import React, { useState } from "react";
import {
  Button,
  Modal,
  Box,
  TextField,
  Stack,
  Typography,
  MenuItem,
} from "@mui/material";
import { cities } from "../../dummyData";
import { useDispatch, useSelector } from "react-redux";
import { flightDetail } from "../../redux/actions";
import { differenceInYears } from 'date-fns';

const FlightDetailModal = ({
  modalNumber,
  handleNextModal,
  handleBackModal,
}) => {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [distance, setDistance] = useState("");
  const [bookingFor, setBookingFor] = useState("");
  const [age, setAge] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [flightPrice, setFlightPrice] = useState(4000);

  const [fromCityError, setfromCityError] = useState("");
  const [toCityError, settoCityError] = useState("");
  const [distanceError, setdistanceError] = useState("");
  const [bookingForError, setbookingForError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [bookingDateError, setbookingDateError] = useState("");

  const bookingDetails = useSelector((state) => state.bookingDetailsReducer);

  const dispatch = useDispatch();

  const handleNextClick = () => {
    let formValid = true;

    if (fromCity === "") {
      formValid = false;
      setfromCityError("Select the city");
    } else {
      setfromCityError("");
    }

    if (toCity === "") {
      formValid = false;
      settoCityError("Select the city");
    } else {
      settoCityError("");
    }

    if (distance === "") {
      formValid = false;
      setdistanceError("Distance is required");
    } else {
      setdistanceError("");
    }

    if (bookingFor === "") {
      formValid = false;
      setbookingForError("Person Name is required");
    } else {
      setbookingForError("");
    }

    if (age === "") {
      formValid = false;
      setbookingForError("Age is required");
    } else {
      setAgeError("");
    }

    if (bookingDate === "") {
      formValid = false;
      setbookingDateError("Date is required");
    } else {
      setbookingDateError("");
    }

    if (formValid){
      dispatch(
        flightDetail({
          fromCity,
          toCity,
          distance,
          bookingFor,
          age,
          bookingDate,
          flightPrice
        })
      )
    handleNextModal()
}
  };

  const handleBackClick = () => {
    handleBackModal();
  };

  const handleSwapCities = () => {
    let temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };

  const flightFare = ()=>{
    let flightFare = 0
    let currentMonth = new Date().getMonth()
    let currentYear = new Date().getFullYear()
    let selectedMonth = new Date(bookingDate).getMonth()
    let selectedYear =  new Date(bookingDate).getFullYear()

    if(selectedMonth == currentMonth && currentYear === selectedYear ){
        flightFare += (flightFare * 20)/100
    }
    if(selectedMonth - 1 ==  currentMonth && currentYear === selectedYear){
        flightFare += (flightFare * 10)/100
    }
    if(bookingDate)
    setFlightPrice(flightPrice + flightFare)
}

const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    return differenceInYears(currentDate, birthDate);
  };

  const passengerAge= calculateAge(bookingDetails.length !==0 ? bookingDetails[bookingDetails.length-1].dob : '');



  return (
    <Modal
    //   open = {true}
      open={modalNumber == 2 ? true : false}
      //  onClose={handleClose}
    >
      <Box
        sx={{
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Step 2: Booking Details
        </Typography>
        <Stack spacing={2}>
          <TextField
            select
            label="From"
            variant="outlined"
            error={!!fromCityError}
            helperText={fromCityError}
            value={fromCity}
            onChange={(e) => setFromCity(e.target.value)}
          >
            {cities.map((city) =>
              city.name != toCity ? (
                <MenuItem key={city.id} value={city.name}>
                  {city.name}
                </MenuItem>
              ) : (
                ""
              )
            )}
          </TextField>
          <button className="swapSymbol" onClick={handleSwapCities}>
            ⇅
          </button>
          <TextField
            select
            label="To"
            variant="outlined"
            error={!!toCityError}
            helperText={toCityError}
            value={toCity}
            onChange={(e) => setToCity(e.target.value)}
          >
            {cities.map((city) =>
              city.name != fromCity ? (
                <MenuItem key={city.id} value={city.name}>
                  {city.name}
                </MenuItem>
              ) : (
                ""
              )
            )}
          </TextField>
          <TextField
            label="Total Distance"
            variant="outlined"
            error={!!distanceError}
            helperText={distanceError}
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
          <TextField
            label="Booking For"
            variant="outlined"
            error={!!bookingForError}
            helperText={bookingForError}
            value={bookingDetails.length !==0 ? bookingDetails[bookingDetails.length-1].passengerName : ''}
            onChange={(e) => setBookingFor(e.target.value)}
          />
          <TextField
            label="Passenger Age"
            variant="outlined"
            error={!!ageError}
            helperText={ageError}
            value={passengerAge}
            onChange={(e) => setAge(e.target.value)}
          />
          <TextField
            label="Booking Date"
            type="date"
            variant="outlined"
            error={!!bookingDateError}
            helperText={bookingDateError}
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            inputProps={{ min: new Date().toISOString().split('T')[0] }}
          />
              <Typography className="flighFare" variant="body1">
         <h4> Flight Fare : {bookingDate && flightPrice}</h4>
        </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={handleBackClick}>
              Back
            </Button>
            <Button variant="contained" onClick={handleNextClick}>
              Next
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};

export default FlightDetailModal;
