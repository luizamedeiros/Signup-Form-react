import React from 'react';
import {TextField, Button} from '@material-ui/core'

function UserData({onFormSubmit}){
    return(
        <form
        onSubmit={(e)=>{
            e.preventDefault();
            let checker=e.target.value;
            onFormSubmit(checker)
        }}
        >
            <TextField 
            id='email'
            label="Email"
            type="text"
            margin="normal"
            variant="outlined"
            fullWidth
            />

            <TextField
            id="password"
            type="password"
            label="Password"
            margin="normal"
            variant="outlined"
            fullWidth
            />
            
            {/*
            <Button 
            variant="contained" 
            color="primary">
                Return
            </Button>
            */}

            <Button
            type="submit"
            variant="contained"
            color= "primary">
                Next
            </Button>
        </form>
    );
}

export default UserData;