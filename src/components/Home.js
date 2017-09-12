import React, {Component} from 'react';
import '../App.css';
import '../Home.css';

export default class About extends Component {
    render() {
        return (
            <main className="home">
                <section className="body">
                    <iframe src="https://www.youtube.com/embed/OJk_HUyzZNk" frameborder="0" allowfullscreen></iframe>
                    <article>
                        <h3>Welcome to Imposter Syndrome!</h3>
                        You've woken up with the pestering feeling that you're in a simulation, but if you go telling everyone without proof, they'll think you're crazy! You'll be in a chat with four other players, three are your friends, the fourth is the chatbot that you need to identify to prove your reality has been compromised. Each round you'll be able to chat with the other players, at the end placing tokens on who you think the chatbot is and one other player who you know the chatbot isn't. If you're feeling confident, you can guess the chatbot for a huge point bonus, but if you don't have enough points to pay the penalty, you're OUT! Have fun proving your reality!
                    </article>
                </section>
                <section className="sidebar">
                    <h2>Sign Up</h2>
                    <form className="signin">
                        <input type="text" placeholder="Username"></input>
                        <input type="text" placeholder="Email"></input>
                        <input type="text" placeholder="Password"></input>
                        <input type="text" placeholder="Confirm Password"></input>
                        <button type="submit">Sign Up</button>
                    </form>
                </section>
            </main>
        );
    }
}
