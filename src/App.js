import React, { Component } from 'react';
// import { Header, Input } from 'semantic-ui-react'
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'
import './App.css';
import FirstTime from "./FirstTime";
import MainContentSite from "./MainContentSite"
import IntroPage from "./IntroPage"
import Cookies from 'universal-cookie'

const cookies = new Cookies();


class App extends Component {
	componentWillMount() {
		this.state = {
			username: cookies.get('username') || null
		};
	}

  constructor(props) {
    super(props);
    // this.state = { username : null };
    this.nameCallback = this.nameCallback.bind(this);
  }

	nameCallback = (name) => {
		cookies.set('username', name, { path: '/' });
		this.setState({username : name})
    this.setState({activeItem : 'intro'})
	};

  render() {
    return (
      <Router>
        <div>
					{this.state.username === null ?<FirstTime callbackFromParent={this.nameCallback} /> : null}
					{this.state.username !== null ?
            <Route exact path="/" component={() => (
              <IntroPage username={this.state.username}/>
						)}/> : null }
					{this.state.username !== null ?
            <Route path="/proj" component={() => (
              <MainContentSite username={this.state.username}/>
						)}/> : null }
						{/*<MainContentSite/>*/}
        </div>
      </Router>
    );
  }
}


export default App;
