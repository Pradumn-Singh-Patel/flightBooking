import React from "react";
import { Button, Modal, Box, Typography, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { totalFare } from "../../redux/actions";

function PaymentModal({ modalNumber, handleBackModal, handleNextModal }) {
  const bookingDetails = useSelector((state) => state.bookingDetailsReducer);
  console.log('booking',bookingDetails)
  let flightPrice = bookingDetails.length !== 0 ? bookingDetails[bookingDetails.length-1].flightFare:'';
  let mealPrice = bookingDetails.length !== 0 ?  bookingDetails[bookingDetails.length-1].mealAmount:'';
  let totalPrice = flightPrice + mealPrice;

  const dispatch = useDispatch()

  const handleNextClick = () => {
    dispatch(totalFare(totalPrice))
    handleNextModal();
  };

  const handleBackClick = () => {
    handleBackModal();
  };

  return (
    <Modal
      // open={true}
      open={modalNumber === 4 ? true : false}
      // onClose={onClose}
      aria-labelledby="billing-modal-title"
      aria-describedby="billing-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Step 4: Payment Details
        </Typography>
        <Typography variant="body1" gutterBottom>
          Flight Fare: ₹{flightPrice}
        </Typography>
        <Typography id="billing-modal-description" variant="body1" gutterBottom>
          Meal Price: ₹{mealPrice}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Total Payable: ₹{totalPrice}
        </Typography>
        <Stack className="btnContainer" direction="row" spacing={2}>
        <Button variant="contained" onClick={handleBackClick}>
          Back
        </Button>
        <Button onClick={handleNextClick} variant="contained">
          Book Now
        </Button>
        </Stack>    
      </Box>
    </Modal>
  );
}

export default PaymentModal;
