import React, {Component} from 'react';
import '../App.css';
import '../Home.css';

const axios = require('axios');
const jwt = require('jsonwebtoken');

export default class About extends Component {
    constructor(props){
        super(props);

        this.state = {
            userEntry: '',
            emailEntry: '',
            passEntry: '',
            confirmPassEntry: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event){
        const { userEntry, emailEntry, passEntry, confirmPassEntry } = this.state;

        let form = {
            user: userEntry,
            email: emailEntry,
            pass: passEntry,
            confirmPass: confirmPassEntry
        };

        axios.post('http://localhost:3001/users/signup', form)
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
            <main className="home">
                <section className="body">
                    <iframe src="https://www.youtube.com/embed/OJk_HUyzZNk" frameBorder="0" allowFullScreen></iframe>
                    <article>
                        <h3>Welcome to Imposter Syndrome!</h3>
                        You've woken up with the pestering feeling that you're in a simulation, but if you go telling everyone without proof, they'll think you're crazy! You'll be in a chat with four other players, three are your friends, the fourth is the chatbot that you need to identify to prove your reality has been compromised. Each round you'll be able to chat with the other players, at the end placing tokens on who you think the chatbot is and one other player who you know the chatbot isn't. If you're feeling confident, you can guess the chatbot for a huge point bonus, but if you don't have enough points to pay the penalty, you're OUT! Have fun proving your reality!
                    </article>
                </section>
                <section className="sidebar">
                    <SignUp handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                </section>
            </main>
        );
    }
}

const SignUp = ({ handleChange, handleSubmit }) =>
    <div>
        <h2>Sign Up</h2>
        <form className="signin" onSubmit={handleSubmit}>
            <input type="text" name="userEntry" placeholder="Username" onChange={handleChange}></input>
            <input type="text" name="emailEntry" placeholder="Email" onChange={handleChange}></input>
            <input type="password" name="passEntry" placeholder="Password" onChange={handleChange}></input>
            <input type="password" name="confirmPassEntry" placeholder="Confirm Password" onChange={handleChange}></input>
            <button type="submit">Sign Up</button>
        </form>
    </div>
