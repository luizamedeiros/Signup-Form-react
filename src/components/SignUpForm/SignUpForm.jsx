import React from 'react';
import {Button, TextField, Switch, FormControlLabel} from '@material-ui/core';

function SignUpForm(){
    return(
        <form>
            <TextField 
            id="name" 
            label="Name" 
            variant="outlined"
            fullWidth
            required={true}
            margin="normal"/>

            <TextField 
            id="lastname" 
            label="Last name" 
            variant="outlined"
            fullWidth
            required={false}
            margin="normal"/>
            
            <TextField id="ssn" 
            label="Social Security Number" 
            variant="outlined"
            fullWidth
            required={false}
            margin="normal"/>
            
            <FormControlLabel
            control={
                <Switch
                name="Offers"
                defaultChecked
                color="primary"
            />}
            label="Offers"/>


            <FormControlLabel
            control={
                <Switch
                name="Newsletter"
                defaultChecked
                color="primary"
            />}
            label="Newsletter"/>

            <Button variant='contained' color='primary' type="submit">Sign up</Button>
        </form>
    );
}
 
export default SignUpForm;