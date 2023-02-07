import React from 'react'
import style from "styled-components";
import Robot from "../assets/robot.gif";
import Logout from './Logout';

export default function Welcome({currentUser}) {
  return (
    <Container>
        <div className='logout'> <Logout/></div>
        <img src={Robot} alt="robot"/>
        <h1>
            Welcome, <span>{currentUser.username}!</span>
        </h1>
        <h3>Please Select a Chat to Start Messaging</h3>
    </Container>
  )
}

const Container = style.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    color:white;
    img{
        height:20rem;
    }
    span{
        color:#4e00ff
    }
    .logout{
        margin-left:54.89rem;
        margin-bottom: 9.03rem;
    }
`;