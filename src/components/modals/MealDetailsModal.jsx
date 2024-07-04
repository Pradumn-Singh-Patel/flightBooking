import React, { useState } from "react";
import { Button, Modal, Typography, Grid, Box, Stack } from "@mui/material";
import {useDispatch, useSelector} from 'react-redux'
import { mealFareDetail } from "../../redux/actions";

const MealDetailModal = ({ modalNumber, handleNextModal, handleBackModal }) => {
  const [items, setItems] = useState([
    { name: "Burger", price: 50, quantity: 0 },
    { name: "Pizza", price: 150, quantity: 0 },
    { name: "Sandwich", price: 70, quantity: 0 },
    { name: "Coke", price: 30, quantity: 0 },
    { name: "Chips", price: 30, quantity: 0 },
  ]);

  const [totalMealFare,setTotalMealFare] = useState(0)

  const dispatch = useDispatch()


  const handleIncrement = (index) => {
    const newItems = [...items];
    newItems[index].quantity++;
    setTotalMealFare((prev)=>prev + newItems[index].price)
    setItems(newItems);
  };

  const handleDecrement = (index) => {
    const newItems = [...items];
    if (newItems[index].quantity > 0) {
      newItems[index].quantity--;
      setTotalMealFare((prev)=>prev - newItems[index].price)
      setItems(newItems);
    }
  };

  const handleNextClick = () => {
    dispatch(mealFareDetail(totalMealFare))
    handleNextModal();
  };

  const handleBackClick = () => {
    handleBackModal();
  };

  return (
    <Modal
    //   open={true}
      open={ modalNumber == 3 ? true : false}
      // onClose={onClose}
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
          Step 3 : Select Meals
        </Typography>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid item xs={12} key={index}>
              <div className="mealContainer">
                <Typography variant="body1">{item.name}</Typography>
                <Typography className="priceDetails" variant="body1">
                  {item.price}
                </Typography>
                <div className="meal-quantity">
                  <Button
                    variant="outlined"
                    onClick={() => handleDecrement(index)}
                  >
                    -
                  </Button>
                  <Typography variant="body1">{item.quantity}</Typography>
                  <Button
                    variant="outlined"
                    onClick={() => handleIncrement(index)}
                  >
                    +
                  </Button>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
        <Typography className="mealAmount" variant="body1">
         <h4> Meal Amount : {totalMealFare}</h4>
        </Typography>
        <Stack className="btnContainer" direction="row" spacing={2}>
          <Button variant="contained" onClick={handleBackClick}>
            Back
          </Button>
          <Button variant="contained" onClick={handleNextClick}>
            Next
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default MealDetailModal;
