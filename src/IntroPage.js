import React, {Component} from 'react';
import {Header, Container, Grid, Popup, Modal, Button} from 'semantic-ui-react'
import './IntroPage.css'
import Background from './img/hkust.jpg';
import About from './About'
import {
	Link
} from 'react-router-dom'

const bgStyle = {
	width: "100%",
	height: "100vh",
	// backgroundColor: "rgba(0,0,0,.1)",
	backgroundImage: `url(${Background})`,
	backgroundSize: "cover",
	overflow: "hidden"
};
const bgColor = {
	width: "inherit",
	height: "inherit",
	backgroundColor: "rgba(0,0,0,.7)",
	overflow: "hidden"
};

export default class IntroPage extends Component {
	render() {
		return (
			<Container fluid>
				<div style={bgStyle}>
					<div style={bgColor}>
						<Container fluid className="ContainerCSS">
							<Grid verticalAlign="middle" columns={1} centered className="ContainerCSS">
								<Grid.Row>
									<Grid.Column>
										<Grid divided className="GridCSS">
											<Grid.Row textAlign="center">
												<Grid.Column width={16}>
													<Modal trigger={<Button>Click me to learn more about Kristian!</Button>}
																 basic closeIcon closeOnDimmerClick>
														<Modal.Content>
															<About username={this.props.username}/>
														</Modal.Content>
													</Modal>
												</Grid.Column>
											</Grid.Row>
											<Grid.Row textAlign="center">
												<Grid.Column>
													<Header size="huge" textAlign="center" inverted color="grey">
														Welcome {this.props.username}
														<Header.Subheader>
															Choose any of the projects below to start finding out!
														</Header.Subheader>
													</Header>
												</Grid.Column>
											</Grid.Row>
											<Grid.Row columns={3} textAlign="center">
												<Grid.Column>
													<Popup
														trigger={<Header size="small" inverted color="grey">
															<Link to="/proj/proj1">Project 1</Link>
														</Header>}
														content='Making a personal portfolio'
														on='hover'
														basic
														position='bottom center'
													/>
												</Grid.Column>
												<Grid.Column>
													<Header size="small" inverted color="grey">
														Project 2
													</Header>
												</Grid.Column>
												<Grid.Column>
													<Header size="small" inverted color="grey">
														Project 3
													</Header>
												</Grid.Column>
											</Grid.Row>
										</Grid>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Container>
					</div>
				</div>
			</Container>
		);
	}
}