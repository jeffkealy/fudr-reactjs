import React, { Component } from 'react';
import {Wrapper} from './components/ReactSwipeCard.js'
import './App.css';

class App extends Component {
  constructor(props) {
    // this code runs first
    super(props)
    this.state= {
      restaurantInfo : [
        {
          name: 'Lowbrow',
          dish: 'Burger'
        },
        {
          name: "Pat's Tap",
          dish: 'chicken Sandwich'
        },
        {
          name: "The Lowry",
          dish: 'Chilaquiles'
        }
      ]
    }
    // this.getData()
  }
  // getData() {
  //   fetch(YOUR_DATABASE).then(res => this.setState({restaurantInfo: res.data}))
  // }

    // this.setState({index: this.state.index + 1})

  swipeYes(){
    console.log("YES");
  }
  swipeNo(){
    console.log("NO");
  }

  render() {
    console.log("this.stae.rest", this.state.restaurantInfo);
    // if (this.state.restaurantInfo[0]) {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Füdr</h1>
        </header>
        <div className="App-intro">

          <Wrapper
            restaurantData={this.state.restaurantInfo}
            swipeNo={this.swipeNo}
            swipeYes={this.swipeYes}
          />
        </div>
      </div>
    );
  // } else{
  //     return null
  //   }
  }
}

export default App;
