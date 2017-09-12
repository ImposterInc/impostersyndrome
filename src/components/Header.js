import React, {Component} from 'react';
import '../App.css';

export default class Header extends Component {
    render() {
        return (
            <div className='page-header'>
                <header>
                    <h1>Imposter Syndrome</h1>
                    <nav>
                        <form>
                            <input type="text" placeholder="Username"></input>
                            <input type="text" placeholder="Password"></input>
                            <button type="submit">Log In</button>
                        </form>
                    </nav>
                </header>
            </div>
        );
    }
}
