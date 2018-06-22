import React,  { Component } from 'react';
import './Hello.css';

/* class Hello extends Component {
    render() {
        return (
            <div className="f1 tc">
                <h1> Alabasta helloooow </h1>
                <p> Vivi was there </p>
                <p> {this.props.greeting}</p>
            </div>
        );
    }
}
 */

 // acts like a function

const Hello = (props) => {
    return (
        <div className="f1 tc">
            <h1> Alabasta helloooow </h1>
            <p> Vivi was there </p>
            <p> {props.greeting}</p>
        </div>
    );
}


export default Hello;     // when a file exports only one thing