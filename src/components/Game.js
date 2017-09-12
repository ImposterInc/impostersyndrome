import React, {Component} from 'react';
import '../App.css';
import '../Game.css';

export default class About extends Component {
    render() {
        return (
            <main className="game">
                <div className="chat">
                    <header>
                        <h3>Player 2</h3>
                        <h3>Round 1</h3>
                    </header>
                    <section>
                        <p><h3>Player 1:</h3>Hey</p>
                        <p><h3>Player 2:</h3>Hey whatsup</p>
                        <p><h3>Player 3:</h3>Everyone here?</p>
                        <p><h3>Player 4:</h3>Alright, who's the bot?</p>
                    </section>
                    <div className="entry">
                        <form>
                            <input type="text" placeholder="Message"></input>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
                <div className="playerList">
                    <h3>Players</h3>
                    <ol>
                        <li>
                            <p>25</p>
                            <p>Player 1</p>
                            <p>&middot;&middot;&middot;</p>
                        </li>
                        <li>
                            <p>20</p>
                            <p>Player 2</p>
                            <p>&middot;</p>
                        </li>
                        <li>
                            <p>15</p>
                            <p>Player 3</p>
                            <p></p>
                        </li>
                        <li>
                            <p>5</p>
                            <p>Player 4</p>
                            <p></p>
                        </li>
                    </ol>
                </div>
            </main>
        );
    }
}
