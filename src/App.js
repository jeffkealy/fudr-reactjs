import React, { Component } from 'react';
import {Wrapper} from './components/ReactSwipeCard.js'
import './App.css';

class App extends Component {
  constructor(props) {
    // this code runs first
    super(props)
    this.state= {
      restaurantInfo : [
        // {
        //   name: 'Lowbrow',
        //   dish: 'Burger'
        // },
        // {
        //   name: "Pat's Tap",
        //   dish: 'chicken Sandwich'
        // },
        // {
        //   name: "The Lowry",
        //   dish: 'Chilaquiles'
        // }
      ]
    }
    // this.getData()
  }
  getData() {
    // fetch(YOUR_DATABASE).then(res => this.setState({restaurantInfo: res.data}))
  }

    // this.setState({index: this.state.index + 1})

  swipeRight(prop){
    console.log("YES", prop);
  }
  swipeLeft(prop){
    console.log("NO", prop);
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
            swipeLeft={this.swipeLeft}
            swipeRight={this.swipeRight}
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
