import React from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Cat from './Cat';
import Dog from './Dog';
import Home from './Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div className='App'>
        <div>
          <Link to='/'>Home으로 가기</Link>
          <Link to='/cat/navi'>Cat으로 가기</Link>
          <Link to='/dog'>Dog로 가기</Link>
        </div>
        <Route exact path='/' component={Home} />
        <Route path='/cat/:cat_name' component={Cat} />
        <Route path='/dog' component={Dog} />

        <button
          onClick={() => {
            this.props.history.push('/cat/nabi');
          }}
        >
          /cat으로 가기
        </button>
        <button
          onClick={() => {
            this.props.history.goBack();
          }}
        >
          뒤로가기
        </button>
      </div>
    );
  }
}

export default withRouter(App);
