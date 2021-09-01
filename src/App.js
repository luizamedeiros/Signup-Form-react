import './App.css';
import React, {Component} from 'react';
import SignUpForm from './components/SignUpForm';
import {Container, Typography, Box} from '@material-ui/core';

class App extends Component{     
    render(){
        return (
            <Container component="article" maxWidth="sm">
                <Box m={3}>
                <Typography variant='h3' 
                component='h1'
                align='center'
                py={400}
                >Sign Up Form</Typography>
                </Box>
                <SignUpForm onFormSubmit={onFormSubmit} checkSSN={checkSSN}/>
            </Container>
        );
    }
}

function onFormSubmit(data){
    console.log(data);
}

function checkSSN(ssn){
    if(ssn.length !== 11){
        return{valid:false, msg:"SSN must have exactly 11 numbers."}
    }
    else{
        return{valid:true, msg:""}
    }
}
export default App;