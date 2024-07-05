import React, { useState } from 'react';
import { Button, Modal, Box, TextField, Stack, Typography } from '@mui/material';
import {useDispatch, useSelector} from 'react-redux'
import { personDetail } from '../../redux/actions';


const PersonDetailsModal = ({ modalNumber, handleBackModal, handleNextModal }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');

  const [firstNameError, setfirstNameError] = useState("");
  const [lastNameError, setlastNameError] = useState("");
  const [dobError, setdobError] = useState('');

  const dispatch = useDispatch()

  const nameRegex = /^[a-zA-ZÀ-ÿ-'\s]+$/


  const handleNextClick = () => {

    let formValid = true;
     
    if (firstName === "") {
      formValid = false
      setfirstNameError("First Name is required");
     
    } else {
      setfirstNameError("");
    }

    if (lastName === "") {
      formValid = false
      setlastNameError("Last Name is required");
     
    } else {
      setlastNameError("");
    }

    if (dob === "") {
      formValid = false
      setdobError("DOB is required");
      
    } else {
      setdobError("");
    }

    if(formValid){
      console.log(firstName, lastName, dob);
      dispatch(personDetail({firstName,lastName,dob}))
    handleNextModal();
    }
  };

  const handleBackClick = () => {
    handleBackModal();
  };

  const isValidName = (name) => {
    console.log('regex ',/^[a-zA-ZÀ-ÿ-'\s]+$/.test(name));
    return /^[a-zA-ZÀ-ÿ-'\s]+$/.test(name)
  }

  return (
    <Modal
      open={modalNumber === 1 ? true : false}
      // onClose={handleNextModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
        <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom>
        Step 1: Enter Details
        </Typography>
        <Stack spacing={2}>
          <TextField
            label="First Name"
            variant="outlined"
            error={!!firstNameError}
            helperText={firstNameError}
            value={firstName}
            // onChange={(e) => setFirstName(isValidName(e.target.value) ? e.target.value : firstName)}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            error={!!lastNameError}
            helperText={lastNameError}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
            <TextField
              label="Date of Birth"
              type="date"
              variant="outlined"
              error={!!dobError}
              helperText={dobError}
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              InputLabelProps={{ shrink: true }}
              inputProps={{ max: new Date().toISOString().split('T')[0] }}
            />
      <Stack direction="row" spacing={2}>
      <Button variant="contained" onClick={handleBackClick}>
          Close
        </Button>
      <Button className="nextBtn" variant="contained" onClick={handleNextClick}>
            Next
          </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};

export default PersonDetailsModal;
