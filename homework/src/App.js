// import './App.css';
import React from 'react';
import Start from './Start';
import Score from './Score';
import Quiz from './Quiz';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '스파르타 코딩 클럽',
      page: 'quiz',
      list: [
        {
          question: '르탄이는 1살이다',
          answer: 'O',
        },
        {
          question: '르탄이는 2살이다',
          answer: 'O',
        },
        {
          question: '르탄이는 3살이다',
          answer: 'O',
        },
        {
          question: '르탄이는 4살이다',
          answer: 'O',
        },
      ],
      scoreMsg: '이 정도면 아주 친한 친구 사이! 앞으로도 더 친하게 지내요! :)',
    };
  }

  render() {
    return (
      <div className='App'>
        {this.state.page === 'quiz' && <Quiz list={this.state.list} />}
        {this.state.page === 'start' && <Start name={this.state.name} />}
        {this.state.page === 'score' && (
          <Score name={this.state.name} msg={this.state.scoreMsg} />
        )}
      </div>
    );
  }
}

export default App;
