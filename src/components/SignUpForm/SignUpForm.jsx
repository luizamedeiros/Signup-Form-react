import React,{useState} from 'react';
import {Button, TextField, Switch, FormControlLabel} from '@material-ui/core';

function SignUpForm({onSubmit, checkSSN}){
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [ssn, setSsn] = useState("");
    const [offers, setOffers] = useState(true);
    const [newsletter, setNewsletter] = useState(true);
    const [error, setError] = useState({ssn:{valid: true, msg:"A Brazilian SSN must have exactly 11 numbers!"}})

    return(
        <form 
        onSubmit={(e)=>{
            e.preventDefault();
            onSubmit({name,lastname,ssn,offers,newsletter})
        }}
        >
            <TextField
            value={name}
            onChange={(e)=> {
                setName(e.target.value);
            }} 
            id="name" 
            label="Name" 
            variant="outlined"
            fullWidth
            required={true}
            margin="normal"/>

            <TextField
            value={lastname}
            onChange={(e)=> {
                setLastname(e.target.value);
            }}  
            id="lastname" 
            label="Last name" 
            variant="outlined"
            fullWidth
            required={false}
            margin="normal"/>
            
            <TextField id="ssn" 
            value={ssn}
            onChange={(e)=>{
                setSsn(e.target.value)
            }}
            onBlur={(e)=>{
                const validSSN = checkSSN(ssn);
                setError({ssn: validSSN})
            }}
            error={!error.ssn.valid}
            helperText={error.ssn.msg}
            label="Social Security Number" 
            variant="outlined"
            fullWidth
            required={false}
            margin="normal"/>
            
            <FormControlLabel
            control={
                <Switch
                checked={offers}
                onChange={(e) => {
                    setOffers(e.target.checked);
                }}
                name="Offers"
                color="primary"
            />}
            label="Offers"/>


            <FormControlLabel
            control={
                <Switch
                checked={newsletter}
                onChange={(e) => {
                    setNewsletter(e.target.checked);
                }}
                name="Newsletter"
                color="primary"
            />}
            label="Newsletter"/>
            
            <Button variant='contained' color='primary' type="submit">Sign up</Button>
        </form>
    );
}
 
export default SignUpForm;