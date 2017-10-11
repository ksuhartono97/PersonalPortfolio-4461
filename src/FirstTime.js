import React, { Component } from "react";
import { Container, Header, Popup, Form, Grid } from "semantic-ui-react";
// import "./FirstTime.css";

// const bgStyle = {
//   width: "100%",
//   height: "100vh"
// };

export default class FirstTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("Submitted");
    alert(
      "We use cookies to store your name data, we won't use it outside of here. Really!"
    );
    const { userName } = this.state;
    this.setState({ username: userName });
    this.props.callbackFromParent(userName);
  };

  render() {
		const bgStyle = {
			width: "100%",
			height: "100vh"
		};
		const gridStyle = {
			width: "inherit",
			height: "inherit"
		};

    return (
      <div className="MainContent">
        <Container style={bgStyle}>
          <Grid style={gridStyle} verticalAlign="middle" columns={1} centered>
            <Grid.Row>
              <Grid.Column>
                <Grid>
                  <Grid.Row centered columns={2} only="computer">
                    <Grid.Column>
                      <Header size="huge">
                        Hello, welcome to my portfolio website
                      </Header>
                      <Form onSubmit={this.handleSubmit}>
                        <Form.Field>
                          <Popup
                            trigger={
                              <Form.Input
                                className="InputBox"
                                transparent
                                placeholder="Enter your name here and press enter"
                                name="userName"
                                onChange={this.handleChange}
                                type="text"
                              />
                            }
                            header="We noticed it's your first time here!"
                            content="Don't worry we won't use your name for anything except to display it to you!"
                            on="focus"
                            position="bottom left"
                            basic
                          />
                        </Form.Field>
                      </Form>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row only="tablet mobile">
                    <Grid.Column>
                      <Header size="huge">
                        Hello, welcome to my portfolio website
                      </Header>
                      <Form onSubmit={this.handleSubmit}>
                        <Form.Field>
                          <Popup
                            trigger={
                              <Form.Input
                                className="InputBox"
                                transparent
                                placeholder="Enter your name here and press enter"
                                name="userName"
                                onChange={this.handleChange}
                                type="text"
                              />
                            }
                            header="We noticed it's your first time here!"
                            content="Don't worry we won't use your name for anything except to display it to you!"
                            on="focus"
                            position="bottom left"
                            basic
                          />
                        </Form.Field>
                      </Form>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}
