import React, { Component } from 'react';
import { Container, Grid, Segment, Image} from 'semantic-ui-react'
import Profpic from './img/profpic.jpg'

export default class About extends Component {
	render() {
		return (
			<Segment compact inverted color="grey" tertiary>
				<Grid verticalAlign="middle" columns={2} centered >
					<Grid.Column width={4}>
						<Image src={Profpic} size='medium' shape='circular' />
					</Grid.Column>
					<Grid.Column width={12}>
						<Container fluid>
							<p>Hey there {this.props.username}, welcome to my portfolio site!</p>
							<p>My name is Kristian Suhartono, a third year Computer Science Student in HKUST</p>
							<p>I was part of the HKUST Robotics Team for 2 years.
							Nowadays, I spend my time learning full-stack development and exploring the different frameworks that are
							available to use in the Internet such as React.JS which is what this site is based on!</p>
							<p>You've probably gotten bored of hearing about me now, click on the <b>dimmer part of the site</b> or <b>press escape</b> or the <b>X button</b> on the top right to close this!</p>
						</Container>
					</Grid.Column>
				</Grid>
			</Segment>
		);
	}
}