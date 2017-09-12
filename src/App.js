import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <h1>Imposter Syndrome</h1>
                    <nav>
                        <a href="#">Settings</a>
                        <a href="#">Name</a>
                    </nav>
                </header>
                <main>
                    <section className="body">
                        <iframe src="https://www.youtube.com/embed/OJk_HUyzZNk" frameborder="0" allowfullscreen></iframe>
                        <article>
                            Welcome to Imposter Syndrome! You've woken up with the pestering feeling that you're in a simulation, but if you go telling everyone without proof, they'll think you're crazy! You'll be in a chat with four other players, three are your friends, the fourth is the chatbot that you need to identify to prove your reality has been compromised. Each round you'll be able to chat with the other players, at the end placing tokens on who you think the chatbot is and one other player who you know the chatbot isn't. If you're feeling confident, you can guess the chatbot for a huge point bonus, but if you don't have enough points to pay the penalty, you're OUT! Have fun proving your reality!
                        </article>
                    </section>
                    <section className="sidebar">
                        <h2>Sign Up</h2>
                        <form>
                            <input type="text" placeholder="Username"></input>
                            <input type="text" placeholder="Email"></input>
                            <input type="text" placeholder="Password"></input>
                            <input type="text" placeholder="Confirm Password"></input>
                            <button type="submit">Sign Up</button>
                        </form>
                    </section>
                </main>
            </div>
        );
    }
}

export default App;
