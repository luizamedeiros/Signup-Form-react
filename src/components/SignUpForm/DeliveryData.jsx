import React from 'react';
import {TextField, Button} from "@material-ui/core"

function DeliveryData({onFormSubmit}){
    return(
        <form
        onSubmit={(e)=> {
            e.preventDefault();
            onFormSubmit();
        }}>
            <TextField
            type="number"
            label="ZIP code/CEP"
            id="zipcep"
            variant="outlined"
            margin="normal"/>

            <TextField
            type="text"
            label="Street"
            id="street"
            variant="outlined"
            fullWidth
            margin="normal"/>

            <TextField
            type="text"
            label="Apartment number"
            id="ap"
            variant="outlined"
            margin="normal"/>

            <TextField
            type="text"
            label="City"
            id="city"
            variant="outlined"
            margin="normal"/>

            <TextField
            type="text"
            label="State"
            id="state"
            variant="outlined"
            margin="normal"/>

            {/*
            <Button 
            variant="contained" 
            color="primary">
                Return
            </Button>
            */}

            <Button 
            variant="contained"
            color="primary"
            fullWidth
            >
                Sign Up
            </Button>

        </form>
    );
}

export default DeliveryData;