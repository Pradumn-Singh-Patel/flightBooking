import React , {useState} from 'react'
import './Home.css'
import BookingDetailsTable from '../../components/mainTable/BookingDetailsTable';
import Button from '@mui/material/Button';
import PersonDetailsModal from '../../components/modals/PersonDetailsModal';
import FlightDetailModal from '../../components/modals/FlightDetailModal';
import MealDetailModal from '../../components/modals/MealDetailsModal';
import PaymentModal from '../../components/modals/PaymentModal';
import {useSelector} from 'react-redux'


const Home = () => {
    const [modalNumber,setModalNumber] = useState(0)

    const bookingDetails = useSelector((state)=> state.bookingDetailsReducer)

    const handleOpenModal = () => {
      setModalNumber(1)
    };
  
    const handleNextModal = () => {
     setModalNumber(modalNumber + 1)
    };

    const handleBackStep = () => {
        setModalNumber(modalNumber - 1)
    }

    console.log('store data ', bookingDetails[0])

  return (
    <div className="container">
        <div className="bookingBtn">
   <Button onClick={handleOpenModal} variant="contained">Book Flight</Button>
   </div>
   <BookingDetailsTable/>
   <PersonDetailsModal modalNumber = {modalNumber} handleBackModal={handleBackStep} handleNextModal={handleNextModal} />
   <FlightDetailModal  modalNumber = {modalNumber} handleBackModal={handleBackStep} handleNextModal={handleNextModal}/>
   <MealDetailModal modalNumber = {modalNumber} handleBackModal={handleBackStep} handleNextModal={handleNextModal}/>
   <PaymentModal modalNumber = {modalNumber} handleBackModal={handleBackStep} handleNextModal={handleNextModal}/>
   </div>
  );
};

export default Home;
