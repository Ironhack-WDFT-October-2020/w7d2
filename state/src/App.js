import React from 'react';
import './App.css';

class App extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {clickCount: 0};
  // }

  state = {
    clickCount: 0,
    liked: false
  }

  clickHandler = () => {
    console.log('clicked');
    // you should not mutate state directly
    // this.state.clickCount = this.clickCount + 1;
    // this.setState({
    //   clickCount: this.state.clickCount + 1
    // })
    this.setState((state, props) => ({
      counter: state.clickCount + 1
    }));
  }

  likeHandler = () => {
    this.setState((state, props) => ({
      liked: !state.liked
    }))
  }

  render() {
    return (
      <>
        <h1>Counter: {this.state.clickCount}</h1>
        <button onClick={this.clickHandler}>Click Me</button>
        <h1>{this.state.liked ? 'I like it' : 'I don\'t like it'}</h1>
        <button onClick={this.likeHandler}>{this.state.liked ? 'Unlike' : 'Like'}</button>
      </>
    )
  }
}

export default App;
