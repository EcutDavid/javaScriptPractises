import App from './container/App.js'
import React, { Component } from 'react';
import Footer from './dumbComponents/Footer';

class Widget extends Component{
  render(){
    return (<div></div>)
  }
}

React.render(<App />, document.querySelector('#app'))
