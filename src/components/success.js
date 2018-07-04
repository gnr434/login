import React, { Component } from 'react';
import '../media/css/App.css';
import { Route, withRouter, Link } from 'react-router-dom';

class Success extends React.Component {
    constructor(props) {
        super(props);

    }
    componentWillMount() {

    }
    render() {
        let userValue = localStorage.getItem('userName');
        let trimedValue = userValue.split("@")[0]
        return (
            <div className="Success">
                <p className="success-messge">Hi {trimedValue},Welcome to  our site</p>
            </div>
        );
    }
}

export default Success;
