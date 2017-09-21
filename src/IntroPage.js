import React, { Component } from 'react';
import { Header, Container, Grid, Popup } from 'semantic-ui-react'
import './IntroPage.css'
import Background from './img/hkust.jpg';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

const bgStyle ={
	width:"100%",
	height:"100vh",
	backgroundColor: "rgba(0,0,0,.1)",
	// backgroundImage: `url(${Background})`,
	backgroundSize: "cover",
	overflow:"hidden"
};

export default class IntroPage extends Component {
	render () {
		return (
			<Container fluid>
				<div style={bgStyle}>
					<Container text className="ContainerCSS">
						<Grid divided textAlign="center" className="GridCSS">
							<Grid.Row>
								<Grid.Column>
									<Header size="huge" textAlign="center">
										Welcome {this.props.username}
										<Header.Subheader>
											Choose any of the projects below to start finding out!
										</Header.Subheader>
									</Header>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row columns={3}>
								<Grid.Column>
									<Popup
										trigger={<Header size="small">
											<Link to="/proj">Project 1</Link>
										</Header>}
										content='Making a personal portfolio'
										on='hover'
										basic
										position='bottom center'
									/>
								</Grid.Column>
								<Grid.Column>
									<Header size="small">
										Project 2
									</Header>
								</Grid.Column>
								<Grid.Column>
									<Header size="small">
										Project 3
									</Header>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Container>

					{/*<img*/}
						{/*className="bg"*/}
						{/*src={require('./img/hkust.jpg')} />*/}
				</div>
			</Container>
		);
	}
}