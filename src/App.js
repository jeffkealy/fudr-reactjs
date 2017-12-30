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
      ],
      index: 0
    }
    // this.getData()
  }
  // getData() {
  //   fetch(YOUR_DATABASE).then(res => this.setState({restaurantInfo: res.data}))
  // }
  nextCard(props, i) {
    console.log('nextCard', props);
    console.log('index', i);

    // this.setState({index: this.state.index + 1})

  }
  render() {
    // if (this.state.restaurantInfo[0]) {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Füdr</h1>
        </header>
        <div className="App-intro">
          <Wrapper
            restaurantName={this.state.restaurantInfo.map(data => data.name)}
            dishName={this.state.restaurantInfo.map(data => data.dish)}
            nextCard={this.nextCard}
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
