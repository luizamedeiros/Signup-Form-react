import React,{Fragment, useState} from 'react';
import {Typography} from '@material-ui/core';
import PersonalData from './PersonalData';
import UserData from './UserData';
import DeliveryData from './DeliveryData'

function SignUpForm({onFormSubmit, checkSSN}){
    const[stage, setStage] = useState(0);
    function nextStage(){
        setStage(stage+1);
    }

    function currentFormPage(stage){
        switch(stage){
            case 0:
                return <UserData onFormSubmit={nextStage}/>;
            case 1:
                return <PersonalData onFormSubmit={nextStage} checkSSN={checkSSN}/>;
            case 2:
                return <DeliveryData onFormSubmit={onFormSubmit}/>;
            default:
                return <Typography>Oops!</Typography>
        }
    }

    return(
        <Fragment>
            {currentFormPage(stage)}
        </Fragment>
    );
}

export default SignUpForm;