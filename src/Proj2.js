import React, { Component } from "react";
import {
  Container,
  Grid,
  Header,
  Image,
  Divider,
  Segment
} from "semantic-ui-react";
import ig1 from "./img/Project2/ig1.jpg";
import ig2 from "./img/Project2/ig2.jpg";
import ig3 from "./img/Project2/ig3.jpg";
import emp from "./img/Project2/emp1.jpg";
import prot1 from "./img/Project2/prot1.jpg";
import prot2 from "./img/Project2/prot2.jpg";
import prot3 from "./img/Project2/prot3.jpg";
import team from "./img/Project2/Team.png";
import interview from "./img/Project2/int.png";
import finalprod from "./img/Project2/final.jpg";


const alignStyle = {
  alignSelf: "center"
};

export default class Project2 extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <p />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Container text textAlign="justified">
                <Grid>
                  <Grid.Row>
                    <Header size="huge" textAlign="left">
                      Redesigning Light - Light at the End of the Tunnel
                    </Header>
                  </Grid.Row>
                  <Grid.Row>
                    <p>
                      For the second project, me and my team were given the
                      responsibility of redesigning how people experience light.
                      Our project started with the same old process that begins
                      all projects in the world, the ideation process or as
                      people like to call it, the brainstorming process.
                    </p>
                  </Grid.Row>
                  <Grid.Row>
                    <Segment>
                      <Image alt="Teammates" src={team} style={alignStyle} />
                      <Divider />
                      Me and my team
                    </Segment>
                  </Grid.Row>
                  <Grid.Row>
                    <p>
                      Firstly, meet my team members, Hendersen and David, over
                      working through this project with them I learned that
                      these two are really amazing people and I’m glad that I
                      got the opportunity to work together with them. I really
                      enjoyed the time we spent working together and felt like I
                      couldn’t have asked for a better team.
                    </p>
                    <p>
                      So we met together and started brainstorming on a couple
                      of ideas that we wanted to work with. Some of the ideas
                      that came out were redesigning how the traffic light
                      works, ambient lighting that works the nearby lighting
                      situation for your rooms and house and the idea that is
                      the title of this project. Obviously, by now you already
                      know which topic did we choose. We decided to drop the
                      ambient lighting idea as we felt that it was too simple
                      and that it has been done too many times before, there are
                      too many other solutions in the market and we felt that
                      it’s not really appropriate to do it anymore. We were
                      interested in redesigning how the traffic light works,
                      however in the end all of us felt the tunnel idea was a
                      really solid idea and felt like that is the idea that we
                      wanted to go to.
                    </p>
                  </Grid.Row>
                  <Grid.Row>
                    <Header size="medium">Needfinding</Header>
                    <p>
                      The second part of our project involved the process of
                      needfinding, where we ensured that people actually see the
                      topic of our project as something that is needed or
                      important. We decided on approaching the process in four
                      parts. The first is we emphatize actually walking in dark
                      pathways, tunnels and hallways. Each of us went out and
                      walked in the dark locations and felt firsthand how it was
                      to walk through such dark locations. We all agreed that it
                      was scarier to walk through poorly lit areas and felt the
                      danger posed by such situations. This was the first step
                      on how we affirmed that our idea was necessary.
                    </p>
                  </Grid.Row>

                  <Grid.Row>
                    <Segment>
                      <Image alt="Emphatizing" src={emp} style={alignStyle} />
                      <Divider />
                      Emphatizing by walking at dark locations
                    </Segment>
                  </Grid.Row>
                  <Grid.Row>
                    <p>
                      The second approach was to do observation on people’s
                      walking speeds on the same path and compared it when it
                      was dark and when it was bright. We observed a trend that
                      people tend to walk faster when the area around them is
                      darker. So again we observed something that could be
                      solved by our project.
                    </p>
                    <p>
                      The third approach was to do surveys on what people
                      thought of the project. All of us designed the survey
                      together and sent it out to people, after receiving the
                      results, we did get information that people who responded
                      to the survey believed that our idea was necessary and
                      they all would like it if it was actually implemented.
                      Again affirming our idea.
                    </p>
                  </Grid.Row>

                  <Grid.Row>
                    <Segment>
											<Image
												src={ig1}
												style={alignStyle}
											/>
											<Image
												src={ig2}
												style={alignStyle}
											/>
											<Image
												src={ig3}
												style={alignStyle}
											/>
                      <Divider />
                      Our survey results
                    </Segment>
                  </Grid.Row>
                  <Grid.Row>
                    <p>
                      The final thing we did was to do interviews with people,
                      we asked them what they thought about the poorly lit
                      pathways and tunnels, and all of them said that they
                      wanted to be able to see where they’re going, they want
                      the place better lit. However, they also have
                      environmental concerns on keeping the light on all the
                      time.
                    </p>
                  </Grid.Row>
                  <Grid.Row>
                    <Segment>
                      <Image
                        alt="Interview"
                        src={interview}
                        style={alignStyle}
                      />
                      <Divider />
                      Interviewing random people
                    </Segment>
                  </Grid.Row>
                  <Grid.Row>
                    <p>
                      So all of that affirms our needfinding, we saw that there
                      is a need and now we move on to the next part of the
                      project.
                    </p>
                  </Grid.Row>
                  <Grid.Row>
                    <Header size="medium">Prototyping</Header>
                    <p>
                      Certainly it was pretty much impossible for us to actually
                      design a working system for our problem, as it would
                      involve actually constructing a tunnel and attaching
                      lights and everything, something that would require a lot
                      of expertise. Therefore, we went and made a prototype
                      using paper and some LED lights. My major contribution to
                      the project was here.
                    </p>
                    <p>
                      Our prototype consisted of a paper tunnel, 10 LED lights
                      attached all over the tunnel, an Arduino UNO board to
                      control the LED lights, and an ultrasonic sensor as a
                      distance measurement sensor. After constructing the paper
                      tunnel, I wired up most of the LEDs on the top of the
                      tunnel and linked them to the Arduino so that I could
                      control them. Also, I wired up the ultrasonic sensor which
                      was going to be used to see where the person walking
                      inside the tunnel is.
                    </p>
                    <Grid.Row>
                      <Segment>
												<Image
													src={prot1}
													style={alignStyle}
												/>
												<Image
													src={prot2}
													style={alignStyle}
												/>
												<Image
													src={prot3}
													style={alignStyle}
												/>
                        <Divider />
                        Our survey results
                      </Segment>
                    </Grid.Row>
                    <p>
                      I developed the logic and programming behind how the
                      lights were controlled. In this prototype, we decided on
                      making a single light shining at the person at all times,
                      so that the single light follows where the person was
                      going.
                    </p>
                    <p>
                      Then came the part where we took our prototype out and got
                      around to asking some people about what they thought about
                      our prototype. We did so by first introducing to them what
                      the project was all about, then we asked them to try out
                      our prototype. We requested that they use the model of a
                      person we had made, and push it through the tunnel so that
                      they can see how it felt to walk through the tunnel. After
                      that, we asked each of them what they thought about the
                      whole experience.
                    </p>
                    <p>
                      The feedback we got from people was that most of them
                      agreed with our design and liked it, they felt that the
                      fact that the light is kept off and only on when people
                      needed them was a great idea on minimizing environmental
                      issues from light. They also liked the idea of the light
                      following you, ensuring that you would be able to see
                      where you are going all the time. A major problem that all
                      of them had with the design was the color of the light,
                      which was red. A lot of people felt that the red color was
                      really daunting and actually made the place look scarier
                      sometimes. And also people wanted more light on as they
                      wanted to be able to see more of the locale.
                    </p>
                    <p>
                      So we heard what people think, and used that to improve on
                      our design. My team and I all thought that we should go
                      with yellow instead of red, as it is a more warm colour
                      and still brightens the location up better. Therefore, we
                      changed all the lights to yellow. I also changed the logic
                      so that instead of just one light on, 3 lights are on at
                      the same time. This number was decided arbitrarily, and
                      when we tried it out we seemed to think that 3 was a nice
                      number given the scale of the tunnel. So we kept the
                      number of 3 lights on at the same time. We also added some
                      pillars on the sides of the tunnel to support the sides of
                      the tunnel.
                    </p>
                  </Grid.Row>
                  <Grid.Row>
                    <Segment>
                      <Image alt="Final" src={finalprod} style={alignStyle} />
                      <Divider />
                      Our final prototype
                    </Segment>
                  </Grid.Row>
                  <Grid.Row>
                    <Header size="medium">Final Iteration</Header>
                    <p>
                      So now that we have our refined design, we went around and
                      asked more people about what they though about the design.
                      And all of them liked how the design was. One suggestion
                      that we had entertained was that we kept all the lights on
                      but at a dimmer level, then as people walk by we brighten
                      those lamps. Which is a great idea and something that we
                      wanted to implement, but we couldn’t do it due to the tech
                      limitations as LEDs do not support that sort of
                      functionality.
                    </p>
                  </Grid.Row>
                  <Grid.Row>
                    <Header size="medium">Videomaking</Header>
                    <p>
                      Another big part of my contribution is in the video making
                      part. I edited the whole video alone and uploaded it to
                      YouTube by myself. I quite enjoyed this part as I never
                      had a lot of experience with video editing before, and
                      this gave me the opportunity to figure out how to edit a
                      video.
                    </p>
                  </Grid.Row>
                  <Grid.Row>
                    <iframe
											title="Video"
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/rz_ZeL0gfIg"
                      frameborder="0"
                      allowfullscreen
                    />
                  </Grid.Row>
                  <Grid.Row>
                    <Header size="medium">Reflection</Header>
                    <p>
                      So at the end of the project, I believed that I learnt
                      some great skills from this project. I learned the
                      importance of how important it is to find out whether
                      people really wanted what you are making, and also how to
                      gather the information required to actually find out what
                      people wanted. It was to my great delight also that I get
                      to work with such amazing teammates. I felt inspired by
                      how these people carry themselves and am really glad that
                      I got to work with them.
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
