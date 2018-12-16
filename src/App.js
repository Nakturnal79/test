import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
        <div className="wrapper">
            <SayFullName name="Aram" surname="Sahakyan" link="vk.com"/>
            <SayFullName name="Alen" surname="Simonyan" link="facebook.com"/>
            <SayFullName name="Vazgen" surname="Xachiyan" link="ok.ru"/>
        </div>
    );
  }
}

function SayFullName(props) {
    return (
        <div>
            <h1>My name {props.name}, last name - {props.surname}</h1>
            <a href={props.link}>Profile</a>
        </div>
    )
}
export default App;
