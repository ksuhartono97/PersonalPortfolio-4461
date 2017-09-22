import React, { Component } from 'react';
import { Header, Container, Grid, Popup} from 'semantic-ui-react'
// Reveal, Image, Segment
import './IntroPage.css'
import Background from './img/hkust.jpg';
import About from './About'
import {
	Link
} from 'react-router-dom'

const bgStyle ={
	width:"100%",
	height:"100vh",
	// backgroundColor: "rgba(0,0,0,.1)",
	backgroundImage: `url(${Background})`,
	backgroundSize: "cover",
	overflow:"hidden"
};
const bgColor = {
	width:"inherit",
	height:"inherit",
	backgroundColor: "rgba(0,0,0,.7)",
	overflow:"hidden"
};
// const whiteColor = {
// 	color:"white"
// };
// const divColor= {
// 	backgroundColor: "rgba(0,0,0,.8)"
// };
// const imageDiv = {
// 	width: "30vh",
// 	height: "30vh"
// };

export default class IntroPage extends Component {
	render () {
		return (
			<Container fluid>
				<div style={bgStyle}>
					<div style={bgColor}>
						<Container fluid className="ContainerCSS">
							<Grid verticalAlign="middle" columns={1} centered className="ContainerCSS">
								<Grid.Row>
								<Grid.Column>
									<Grid divided className="GridCSS">
										<Grid.Row centered columns={2}>
											<Grid.Column>
												<About username={this.props.username}/>
											</Grid.Column>
										</Grid.Row>
										<Grid.Row textAlign="center">
											<Grid.Column>
												<Header size="huge" textAlign="center" inverted color="grey">
													Welcome {this.props.username}
													<Header.Subheader inverted color="grey">
														Choose any of the projects below to start finding out!
													</Header.Subheader>
												</Header>
											</Grid.Column>
										</Grid.Row>
										<Grid.Row columns={3} textAlign="center">
											<Grid.Column>
												<Popup
													trigger={<Header size="small" inverted color="grey">
														<Link to="/proj">Project 1</Link>
													</Header>}
													content='Making a personal portfolio'
													on='hover'
													basic
													position='bottom center'
												/>
												{/*<div style={imageDiv}>*/}
												{/*<Reveal animated='move' instant>*/}
												{/*<Reveal.Content hidden>*/}
												{/*<Segment fluid padded='very'>*/}
												{/*<Header size="small" inverted color="grey">*/}
												{/*<Link to="/proj">Project 1</Link>*/}
												{/*</Header>*/}
												{/*</Segment>*/}
												{/*</Reveal.Content>*/}
												{/*<Reveal.Content visible>*/}
												{/*<Image fluid src={Elephant}/>*/}
												{/*</Reveal.Content>*/}
												{/*</Reveal>*/}
												{/*</div>*/}
											</Grid.Column>
											<Grid.Column>
												<Header size="small" inverted color="grey">
													Project 2
												</Header>
												{/*<Reveal animated='move' instant>*/}
												{/*<Reveal.Content hidden>*/}
												{/*<div style={divColor} >*/}
												{/*<Header size="small" inverted color="grey">*/}
												{/*<Link to="/proj">Project 2</Link>*/}
												{/*</Header>*/}
												{/*</div>*/}
												{/*</Reveal.Content>*/}
												{/*<Reveal.Content visible>*/}
												{/*<Image src={Dog1} size="medium"/>*/}
												{/*</Reveal.Content>*/}
												{/*</Reveal>*/}
											</Grid.Column>
											<Grid.Column>
												<Header size="small" inverted color="grey">
													Project 3
												</Header>
												{/*<Reveal animated='move' instant>*/}
												{/*<Reveal.Content hidden>*/}
												{/*<div style={divColor}>*/}
												{/*<Header size="small" inverted color="grey">*/}
												{/*<Link to="/proj">Project 3</Link>*/}
												{/*</Header>*/}
												{/*</div>*/}
												{/*</Reveal.Content>*/}
												{/*<Reveal.Content visible>*/}
												{/*<Image src={Dog2} size="medium"/>*/}
												{/*</Reveal.Content>*/}
												{/*</Reveal>*/}
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