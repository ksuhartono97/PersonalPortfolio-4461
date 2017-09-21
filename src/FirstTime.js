import React, { Component } from 'react';
import { Container, Header, Input, Popup, Form} from 'semantic-ui-react'
import './FirstTime.css'

import {
	Redirect
} from 'react-router-dom'

export default class FirstTime extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: null,
			fireRedirect : false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleChange = (e, { name, value }) => {
		this.setState({ [name]: value })
	};
	handleSubmit = e => {
		e.preventDefault();
		const { userName } = this.state;
		this.setState({ username : userName });
		this.setState({ fireRedirect: true });
		this.props.callbackFromParent(this.state.username);
	};

	render() {
		const { fireRedirect } = this.state;

		return (
			<div className="MainContent">
				<Container>
					<Header size="huge">Hello, welcome to my portfolio website</Header>
					<Form onSubmit={this.handleSubmit}>
						<Form.Field>
							<Popup
								trigger={<Input
									className="InputBox"
									transparent
									placeholder="Enter your name here and press enter to enter the website"
									name="userName"
									onChange={this.handleChange}
								/>}
								header="We noticed it's your first time here!"
								content="Don't worry we won't use your name for anything except to display it to you!"
								on="focus"
								position="bottom left"
								basic
							/>
						</Form.Field>
					</Form>
					{fireRedirect && (
						<Redirect to={'/intro'}/>
					)}
				</Container>
			</div>
		);
	}
}
