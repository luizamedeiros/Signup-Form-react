import React from 'react';
import {TextField, Button} from '@material-ui/core'
import { useState } from 'react';

function UserData({onFormSubmit}){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
        <form
        onSubmit={(e)=>{
            e.preventDefault();
            onFormSubmit({email, password})
        }}
        >
            <TextField
            value = {email}
            onChange={(e)=>{
                setEmail(e.target.value);
            }} 
            id='email'
            label="Email"
            type="text"
            margin="normal"
            variant="outlined"
            fullWidth
            required={true}
            />

            <TextField
            value = {password}
            onChange={(e)=>{
                setPassword(e.target.value);
            }} 
            id="password"
            type="password"
            label="Password"
            margin="normal"
            variant="outlined"
            fullWidth
            required={true}
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