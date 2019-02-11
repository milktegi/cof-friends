import React, { Component } from 'react';
import axios from 'axios';
import './Resources/css/styles.css';

class App extends Component {
  
  componentDidMount(){
    axios.get('http://localhost:3002/api/product/brands')
    .then(response=>{
      console.log(response)
    })
  }
  
  
  render() {
    return (
      <div className="App">
        my app
      </div>
    );
  }
}

export default App;
