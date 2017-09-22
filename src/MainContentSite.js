import React, { Component } from 'react';
import { Container, Grid, Menu, Header, Sticky, Message} from 'semantic-ui-react'
import Project1 from './Proj1'
import { Redirect } from 'react-router-dom'

export default class MainContentSite extends Component {
	constructor (props) {
		super(props);
		this.state = {
			activeItem: 'proj1',
			fireRedirect : false
		};
		this.handleItemClick = this.handleItemClick.bind(this);
		this.handleContextRef = this.handleContextRef.bind(this);
		this.handleRedirectHome = this.handleRedirectHome.bind(this);
	}
	handleItemClick = (e, { name }) => this.setState({ activeItem: name });
	handleContextRef = contextRef => this.setState({ contextRef });
	handleRedirectHome = (e) => {
		this.setState({ fireRedirect: true });
	};

	render () {
		const { fireRedirect } = this.state;
		const { contextRef } = this.state;
		const titleStyle = {
			padding: 15
		};
		const bgStyle ={
			width:"100%",
			minHeight:"100vh",
			backgroundColor: "rgba(0,0,0,.1)",
			// backgroundImage: `url(${Background})`,
			backgroundSize: "cover"
		};

		return (
			<Container fluid style={bgStyle}>
				<Grid centered columns={3}>
					<Grid.Column width={4}>
						<Sticky content={contextRef} offset={200}>
							<Header style={titleStyle}>Click me to navigate!</Header>
							<Menu pointing secondary vertical>
								<Menu.Item name="home" onClick={this.handleRedirectHome}>
									Home
								</Menu.Item>
								<Menu.Item name='proj1' active={this.state.activeItem === 'proj1'} onClick={this.handleItemClick}>
									Project 1
								</Menu.Item>

								<Menu.Item name='proj2' active={this.state.activeItem === 'proj2'} onClick={this.handleItemClick}>
									Project 2
								</Menu.Item>

								<Menu.Item name='proj3' active={this.state.activeItem === 'proj3'} onClick={this.handleItemClick}>
									Project 3
								</Menu.Item>
							</Menu>
						</Sticky>
					</Grid.Column>
					<Grid.Column width={8}>
						{this.state.activeItem==='proj1' ? <Project1/> : null}
						{this.state.activeItem==='proj2' ? <Message>
							<Message.Header>TO BE RELEASED</Message.Header>
							<p>Coming soon.</p>
						</Message> : null}
						{this.state.activeItem==='proj3' ? <Message>
							<Message.Header>TO BE RELEASED</Message.Header>
							<p>Coming soon.</p>
						</Message>: null}
					</Grid.Column>
					<Grid.Column width={4}>
						{/*//Placeholder*/}
					</Grid.Column>
				</Grid>
				{fireRedirect && (
					<Redirect to={'/intro'}/>
				)}
			</Container>
		);
	}
}