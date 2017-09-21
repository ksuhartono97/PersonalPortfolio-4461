import React, { Component } from 'react';
// import { Header, Input } from 'semantic-ui-react'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'
import './App.css';
import FirstTime from "./FirstTime";
import MainContentSite from "./MainContentSite"
import IntroPage from "./IntroPage"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username : null };
    this.nameCallback = this.nameCallback.bind(this);
  }

	nameCallback = (name) => {
		this.setState({username : name})
    this.setState({activeItem : 'intro'})
	};

  activeCallback = (name) => {

  };

  render() {
    return (
      <Router>
        <div>
					{this.state.username === null ? <FirstTime callbackFromParent={this.nameCallback} /> : null}
					{/*{this.state.username === null ?*/}
            {/*<Route exact path="/" component={() => (*/}
              {/*<FirstTime callbackFromParent={this.nameCallback} />*/}
						{/*)}/> : null }*/}
					{this.state.username !== null ?
            <Route path="/intro" component={() => (
              <IntroPage username={this.state.username}/>
						)}/> : null }
					{this.state.username !== null ?
            <Route path="/proj" component={() => (
              <MainContentSite/>
						)}/> : null }
        </div>
      </Router>
    );
  }
}


export default App;
