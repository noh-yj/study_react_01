import './App.css';
import React from 'react';
// import Start from './Start';
import Score from './Score';
import Quiz from './Quiz';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '스파르타 코딩 클럽',
      scoreMsg: '이 정도면 아주 친한 친구 사이! 앞으로도 더 친하게 지내요! :)',
    };
  }

  render() {
    return (
      <div className='App'>
        {/* <Start name={this.state.name} /> */}
        <Score name={this.state.name} msg={this.state.scoreMsg} />
        <Quiz />
      </div>
    );
  }
}

export default App;
