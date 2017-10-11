import React, { Component } from "react";
import { Container, Grid, Menu, Message, Button } from "semantic-ui-react";
import Project1 from "./Proj1";
import { Route, Link } from "react-router-dom";
import Scroll from "react-scroll"; // Imports all Mixins
// import {scroller} from 'react-scroll'; //Imports scroller mixin, can use as scroller.scrollTo()

let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;

export default class MainContentSite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "",
      fireRedirect: false
    };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleContextRef = this.handleContextRef.bind(this);
    this.handleRedirectHome = this.handleRedirectHome.bind(this);
  }

  componentDidMount = () => {
    Events.scrollEvent.register("begin", function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  };
  componentWillUnmount = () => {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  };
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  handleContextRef = contextRef => this.setState({ contextRef });
  handleRedirectHome = e => {
    this.setState({ fireRedirect: true });
  };

  render() {
    // const { contextRef } = this.state;
    // const titleStyle = {
    //   padding: 15
    // };
    const bgStyle = {
      width: "100%",
      minHeight: "100vh",
      backgroundSize: "cover"
    };

    return (
      <Container fluid style={bgStyle}>
        <Grid centered>
          <Grid.Row columns={3} only="computer tablet">
            <Grid.Column width={4}>
              {/*<Sticky context={contextRef}>*/}
              <Menu fixed="top" pointing secondary vertical>
                {/*<Menu.Header content="Click me to navigate"/>*/}
                <Link to="/">
                  <Menu.Item name="home" />
                </Link>

                <Link to="/proj/proj1">
                  <Menu.Item
                    name="proj1"
                    active={this.state.activeItem === "proj1"}
                    onClick={this.handleItemClick}
                  />
                </Link>

                <Link to="/proj/proj2">
                  <Menu.Item
                    name="proj2"
                    active={this.state.activeItem === "proj2"}
                    onClick={this.handleItemClick}
                  />
                </Link>
                <Link to="/proj/proj3">
                  <Menu.Item
                    name="proj3"
                    active={this.state.activeItem === "proj3"}
                    onClick={this.handleItemClick}
                  />
                </Link>
              </Menu>
              {/*</Sticky>*/}
            </Grid.Column>
            <Grid.Column width={8}>
              <Route path="/proj/proj1" component={() => <Project1 />} />
              <Route
                path="/proj/proj2"
                component={() => (
                  <Message>
                    <Message.Header>TO BE RELEASED</Message.Header>
                    <p>Coming soon.</p>
                  </Message>
                )}
              />
              <Route
                path="/proj/proj3"
                component={() => (
                  <Message>
                    <Message.Header>TO BE RELEASED</Message.Header>
                    <p>Coming soon.</p>
                  </Message>
                )}
              />
            </Grid.Column>
            <Grid.Column width={4}>{/*//Placeholder*/}</Grid.Column>
          </Grid.Row>
          {/*<Grid.Row only="mobile">*/}
          {/**/}
          {/*</Grid.Row>*/}
          <Grid.Row only="mobile">
            <Grid.Column>
              {/*<Sticky context={contextRef}>*/}
              {/*<Segment>*/}
              <Menu pointing secondary>
                <Link to="/">
                  <Menu.Item name="home" />
                </Link>

                <Link to="/proj/proj1">
                  <Menu.Item
                    name="proj1"
                    active={this.state.activeItem === "proj1"}
                    onClick={this.handleItemClick}
                  />
                </Link>

                <Link to="/proj/proj2">
                  <Menu.Item
                    name="proj2"
                    active={this.state.activeItem === "proj2"}
                    onClick={this.handleItemClick}
                  />
                </Link>
                <Link to="/proj/proj3">
                  <Menu.Item
                    name="proj3"
                    active={this.state.activeItem === "proj3"}
                    onClick={this.handleItemClick}
                  />
                </Link>
              </Menu>
              {/*</Segment>*/}
              {/*</Sticky>*/}
              <Route path="/proj/proj1" component={() => <Project1 />} />
              <Route
                path="/proj/proj2"
                component={() => (
                  <Message>
                    <Message.Header>TO BE RELEASED</Message.Header>
                    <p>Coming soon.</p>
                  </Message>
                )}
              />
              <Route
                path="/proj/proj3"
                component={() => (
                  <Message>
                    <Message.Header>TO BE RELEASED</Message.Header>
                    <p>Coming soon.</p>
                  </Message>
                )}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only="mobile" verticalAlign="middle" columns={5} centered>
            <Grid.Column>
              <Button
                size="medium"
                icon="angle up"
                onClick={this.scrollToTop}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
