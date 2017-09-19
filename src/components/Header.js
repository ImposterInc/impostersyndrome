import React, {Component} from 'react';
import '../App.css';

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

const Login = ({ handleChange, handleSubmit }) => <nav>
        <form onSubmit={handleSubmit}>
            <input type="text" name="userEntry" placeholder="Username" onChange={handleChange}></input>
            <input type="password" name="passEntry" placeholder="Password" onChange={handleChange}></input>
            <button type="submit">Log In</button>
        </form>
    </nav>
