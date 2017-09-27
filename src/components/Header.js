import React, {Component} from 'react';
import '../App.css';

const axios = require('axios');
const jwt = require('jsonwebtoken');

export default class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            userEntry: '',
            passEntry: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event){
        const { userEntry, passEntry } = this.state;

        let form = {
            userOrEmail: userEntry,
            pass: passEntry
        };

        axios.post('http://localhost:3001/users', form)
        .then(result => {
            if(result.data.status === 'success'){
                jwt.verify(result.data.data, process.env.REACT_APP_TOKEN, (err, decoded) => {
                    console.log(decoded);
                    localStorage.setItem('impostersyndrome', JSON.stringify(decoded));
                    window.location.href = '/';
                });
            }else{
                console.log(result.data);
            }
        });

        event.preventDefault();
    }

    render() {
        return (
            <div className='page-header'>
                <header>
                    <h1>Imposter Syndrome</h1>
                    <Login handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                </header>
            </div>
        );
    }
}

const Login = ({ handleChange, handleSubmit }) =>
    <form onSubmit={handleSubmit}>
        <input type="text" name="userEntry" placeholder="Username or Email" onChange={handleChange}></input>
        <input type="password" name="passEntry" placeholder="Password" onChange={handleChange}></input>
        <button type="submit">Log In</button>
    </form>
