import './App.css';
import React, {Component} from 'react';
import SignUpForm from './components/SignUpForm';
import {Container, Typography} from '@material-ui/core';
//import 'fontsource-roboto';

class App extends Component{
    render(){
        return (
            <Container component="article" maxWidth="sm">
                <Typography variant='h3' 
                component='h1'
                align='center'
                >Sign Up Form</Typography>
                <SignUpForm onSubmit={onFormSubmit}/>
            </Container>
        );
    }
}

function onFormSubmit(data){
    console.log(data);
}
export default App;