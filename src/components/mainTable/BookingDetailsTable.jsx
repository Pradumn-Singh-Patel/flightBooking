import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useSelector } from 'react-redux';

const BookingDetailsTable= () => {
  const bookingDetails = useSelector((state)=> state.bookingDetailsReducer)
    // const bookings = [
    //     { name: 'John Doe', age: 30, from: 'City A', to: 'City B', date: '2024-07-03', price: '100', numPersons: 2 },
    //     { name: 'Jane Smith', age: 25, from: 'City C', to: 'City D', date: '2024-07-04', price: '120', numPersons: 3 },
    //   ];

      console.log('detailsssss ',bookingDetails)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Booking table">
        <TableHead>
          <TableRow>
            <TableCell>S.no</TableCell>
            <TableCell>Booking name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>From</TableCell>
            <TableCell>To</TableCell>
            <TableCell>Date</TableCell>
            <TableCell> Booking Amount (INR)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookingDetails.map((booking, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{booking.passengerName}</TableCell>
              <TableCell>{booking.age}</TableCell>
              <TableCell>{booking.from}</TableCell>
              <TableCell>{booking.to}</TableCell>
              <TableCell>{booking.date}</TableCell>
              <TableCell>{booking.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BookingDetailsTable;
