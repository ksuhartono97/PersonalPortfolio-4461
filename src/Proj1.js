import React, { Component } from 'react';
import { Container, Grid, Header, List, Image } from 'semantic-ui-react'
import Dog from './img/dog.jpeg';

export default class Project1 extends Component {
	render () {
		return (
			<Container>
				<Grid>
					<Grid.Row>
						<Grid.Column>
							<p></p>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column>
							<Header size="huge" textAlign="center">Project 1: Personal Portfolio</Header>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column>
							<Container text textAlign="justified">
								<Grid>
									<Grid.Row>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan molestie dapibus. Curabitur sagittis erat nec lectus sagittis semper non a massa. Nullam gravida facilisis sem sit amet porta. Duis fringilla purus porttitor tellus efficitur euismod. Donec non nisl vitae erat malesuada pellentesque. Proin at augue ipsum. Vestibulum feugiat tortor ut metus faucibus, in tincidunt tellus viverra. Sed tempus feugiat quam, quis imperdiet velit mattis vel. Pellentesque sollicitudin diam lacus, et tempor orci rhoncus vitae. Aliquam rutrum ante id porttitor consequat. Phasellus fringilla malesuada scelerisque. Vivamus sollicitudin massa enim, in consequat ante viverra at. Quisque sit amet fermentum ex, at malesuada ante.
										</p>
									</Grid.Row>
									<Grid.Row>
										<p>
											Sed lacinia vestibulum feugiat. Cras imperdiet posuere lectus ut faucibus. Pellentesque varius quam sed risus luctus, in lobortis quam gravida. Nam a imperdiet justo. Cras vulputate fringilla tempor. Nunc condimentum arcu vel sollicitudin eleifend. Fusce urna metus, cursus a magna id, laoreet aliquet enim. Etiam ut enim eleifend, fermentum lorem ac, feugiat arcu. Morbi elementum vitae mauris id imperdiet. Aliquam mauris ex, varius ut velit eu, pellentesque convallis augue. Praesent lacinia vehicula tortor, eu commodo tellus lacinia et. Duis in tincidunt mauris. Sed auctor finibus metus nec posuere.
										</p>
									</Grid.Row>
									<Grid.Row columns={2}>
										<Grid.Column>
											<List bulleted>
												<List.Item>Loren</List.Item>
												<List.Item>Loren ipsum</List.Item>
												<List.Item>
													Loren ipsum
													<List.List>
														<List.Item>
															Loren ipsum
														</List.Item>
														<List.Item>
															Loren ipsum
														</List.Item>
														<List.Item>
															Loren ipsum
														</List.Item>
													</List.List>
												</List.Item>
												<List.Item>Loren ipsum dolor sit</List.Item>
											</List>
										</Grid.Column>
										<Grid.Column>
											<Image src={Dog} fluid/>
										</Grid.Column>
									</Grid.Row>
									<Grid.Row>
										<p>
											Cras imperdiet elementum ornare. Nulla egestas turpis nec eros commodo, ut iaculis enim congue. Maecenas posuere ac neque vel sollicitudin. Integer pretium quam risus, nec malesuada tortor aliquam at. Vestibulum tristique laoreet ante pharetra suscipit. Aenean non velit nisl. Pellentesque hendrerit ligula sit amet leo pharetra, quis iaculis risus placerat. Sed rutrum dui ac turpis finibus dignissim. Sed in scelerisque quam. Aenean pulvinar tincidunt ligula, convallis finibus dolor aliquam in. Nullam facilisis massa sit amet imperdiet pretium. Nunc eleifend facilisis massa, a posuere erat tempus non. Nulla tempus ligula vitae nunc malesuada, vel interdum lectus bibendum.
										</p>
									</Grid.Row>
									<Grid.Row>
										<p>
											Nunc vitae suscipit nunc. Nullam egestas mi urna, id euismod ex consequat nec. Ut eleifend scelerisque augue, a pretium dolor ultricies vitae. Nulla semper eros sed turpis consectetur, a tincidunt neque dapibus. Sed non ipsum vitae enim eleifend posuere. Ut mauris neque, vehicula id quam sit amet, consequat interdum lorem. Aliquam suscipit vulputate vestibulum. Nullam consequat magna nibh, sit amet semper nunc maximus fringilla. Nam consectetur mollis quam ac malesuada. Morbi condimentum nec elit vitae imperdiet. Donec fermentum risus ipsum, vitae pharetra elit luctus vel. Curabitur finibus in erat non ullamcorper. Ut at orci ipsum. Mauris dapibus nisl eros, eu laoreet eros volutpat fringilla. Etiam sed tortor sit amet odio viverra imperdiet sed eu enim. Vivamus nibh augue, lobortis a ipsum in, vehicula euismod est.
										</p>
									</Grid.Row>
									<Grid.Row>
										<p>
											Suspendisse quis diam in urna dignissim viverra vel quis neque. Ut congue erat non aliquet molestie. Nunc porta pellentesque felis nec volutpat. Etiam maximus libero sed tellus consectetur, nec molestie odio vulputate. Proin convallis, mi at ornare rhoncus, ligula metus auctor metus, sit amet consequat eros justo mattis ex. Morbi dignissim justo eu pulvinar molestie. Suspendisse efficitur sed ante vel semper. Ut feugiat augue leo, in fringilla tellus ornare non. Nullam ullamcorper facilisis nisi nec facilisis. Donec iaculis rhoncus diam. Integer porta et urna et dignissim. Vivamus at elementum sem. Suspendisse ullamcorper nisi id turpis eleifend gravida. Proin malesuada metus in ipsum pretium, eget laoreet sapien feugiat. Sed ac pellentesque odio.
										</p>
									</Grid.Row>
								</Grid>
							</Container>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		);
	}
}