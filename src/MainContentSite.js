import React, {Component} from 'react';
import {Container, Grid, Menu, Header, Sticky, Message} from 'semantic-ui-react'
import Project1 from './Proj1'
import { Route, Link} from 'react-router-dom'


export default class MainContentSite extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: 'proj1',
			fireRedirect: false
		};
		this.handleItemClick = this.handleItemClick.bind(this);
		this.handleContextRef = this.handleContextRef.bind(this);
		this.handleRedirectHome = this.handleRedirectHome.bind(this);
	}

	handleItemClick = (e, {name}) => this.setState({activeItem: name});
	handleContextRef = contextRef => this.setState({contextRef});
	handleRedirectHome = (e) => {
		this.setState({fireRedirect: true});
	};

	render() {
		const {contextRef} = this.state;
		const titleStyle = {
			padding: 15
		};
		const bgStyle = {
			width: "100%",
			minHeight: "100vh",
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

								<Menu.Item name="home">
									<Link to="/">Home</Link>
								</Menu.Item>

								<Menu.Item name='proj1' active={this.state.activeItem === 'proj1'} onClick={this.handleItemClick}>
									<Link to="/proj/proj1">Project 1</Link>
								</Menu.Item>

								<Menu.Item name='proj2' active={this.state.activeItem === 'proj2'} onClick={this.handleItemClick}>
									<Link to="/proj/proj2">Project 2</Link>
								</Menu.Item>

								<Menu.Item name='proj3' active={this.state.activeItem === 'proj3'} onClick={this.handleItemClick}>
									<Link to="/proj/proj3">Project 3</Link>
								</Menu.Item>
							</Menu>
						</Sticky>
					</Grid.Column>
					<Grid.Column width={8}>
						<Route path="/proj/proj1" component={() => (
							<Project1/>
						)}/>
						<Route path="/proj/proj2" component={() => (
							<Message>
								<Message.Header>TO BE RELEASED</Message.Header>
								<p>Coming soon.</p>
							</Message>
						)}/>
						<Route path="/proj/proj3" component={() => (
							<Message>
								<Message.Header>TO BE RELEASED</Message.Header>
								<p>Coming soon.</p>
							</Message>
						)}/>
					</Grid.Column>
					<Grid.Column width={4}>
						{/*//Placeholder*/}
					</Grid.Column>
				</Grid>
			</Container>
		);
	}
}