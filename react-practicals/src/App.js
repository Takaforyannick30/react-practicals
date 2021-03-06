import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render(){
        return (
            <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
                <Parent />

            </header>
            </div>
        );

    }
  
}

class Parent extends Component {
    render() {
        return(
            <div>
                <p>I am the parent Component</p>
                <Cars BestRides='Cars are cool' numbers='12345' coolCars={this.props.cars}/>
                
            </div>
        );
    }
}

Parent.defaultProps = {
    cars: ['Toyota', 'BMW', 'Audi']
}

class Cars extends Component {
    render() {
        return(
            <div>
                <p>I am the Cars Component</p>
                <p>{ this.props.BestRides }</p>
                <p>{ this.props.numbers }</p>
                <p>{ this.props.coolCars.map((item, i) => {
                    return " "+item
                })
                 }</p>

                
            </div>
        );
    }
}

export default App;
