import React, { Component } from "react";
import {
  Container,
  Grid,
  Header,
  Image,
  Divider,
  Segment,
  List
} from "semantic-ui-react";

import im1 from "./img/Project3/observe.png";
import im2 from "./img/Project3/interview.png";
import im3 from "./img/Project3/sboard1.png";
import im4 from "./img/Project3/sboard2.png";
import im5 from "./img/Project3/editing.png";
import im6 from "./img/Project3/usability.png";

const alignStyle = {
  alignSelf: "center"
};

export default class Project3 extends Component {
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
                      Human Robot Interaction – Automatic Food Service
                    </Header>
                  </Grid.Row>
                  <Grid.Row>
                    <p>
                      For the third project, me and my team were given the task
                      of figuring out where a robot can be of use in HKUST. In a
                      way that people are able to interact with the robot in a
                      human friendly manner and the robot helps fix a certain
                      problem in UST. We conducted some meetings and decided
                      that we identified a problem in the ordering system in
                      UST, so now we have to prove that this problem exits!
                    </p>
                  </Grid.Row>
                  <Grid.Row>
                    <Header size="medium">Needfinding</Header>
                    <p>
                      First things first, we have to conduct needfinding. This
                      time, we did needfinding by conducting an observation of
                      the current state of food ordering, for our case we did
                      observation in McDonalds. After a while observing in
                      McDonalds, we saw a few points that were interesting to
                      us. The first being that the cashiers have to take orders,
                      and then they will have to move away to help prepare the
                      food (even though there seems to already be a dedicated
                      employee for this task). Thus causing the line to stall
                      sometimes, as the cashier cannot be taking more orders as
                      there are already too many orders in the window(number of
                      orders in the system), and the cashier has to help get the
                      orders out to the customers before taking more orders. The
                      second point is that, most of the time, not all the
                      cashier spots are open, there are 3 cashier spots in
                      McDonalds, however, only one is usually open all the time,
                      sometimes there are two, but there were never 3 cashiers
                      open. This shows that they are not fully utilizing the
                      maximum effectiveness of the number of cashier machines.
                      There can be many reasons for this, such as too small
                      number of staff, not enough number of people (even though
                      the line is usually long, 15-20 mins of queue time before
                      finally being able to order the food, and then more wait
                      time until the food is prepared). These two points are the
                      main problems that we’ve identified that needs to be
                      solved by our robot.
                    </p>
                  </Grid.Row>
                  <Grid.Row>
                    <Segment>
                      <Image alt="Observing" src={im1} style={alignStyle} />
                      <Divider />
                      Observing the crowd in McDonalds
                    </Segment>
                  </Grid.Row>
                  <Grid.Row>
                    <Segment>
                      <Image alt="Interviewing" src={im2} style={alignStyle} />
                      <Divider />
                      Interviews with people
                    </Segment>
                  </Grid.Row>
                  <Grid.Row>
                    <p>
                      To reconfirm our findings from the observation, we
                      conducted some interviews with some people. These people
                      told us that they do not mind having a robot/machine
                      instead of a human cashier. They mentioned that it would
                      surely help streamline the process, allowing reallocating
                      the workforce to other sections in the restaurant. Some of
                      them even mentioned that it might be useful for people who
                      do not speak the language. Such as here in Hong Kong,
                      there might be people who cannot speak Cantonese, but not
                      all the cashiers are able to speak perfect English, thus
                      causing a problem when ordering as there might be
                      communication problems, causing a long ordering time or
                      wrong orders that can sometimes happen. I did a couple of
                      interviews with some people here.
                    </p>
                    <p>
                      Thus these two activities have shown to us that there is a
                      problem that needs to be solved, and thus we embarked on
                      the task of defining a solution for said problem.
                    </p>
                  </Grid.Row>
                  <Grid.Row>
                    <Header size="medium">Prototyping</Header>
                    <p>
                      In the prototyping stage, first we defined the problems
                      and then we found solutions for each problem. The major
                      problem is that cashiers are not working to their full
                      capacity in some restaurants as they have to multitask and
                      not all cashiers are open all the time. Therefore, we
                      figured out that robots could be used to replace these
                      cashiers, the robots can be on standby all the time (as
                      long as they have power) so that customers can order all
                      the time. It should also create a more sustained and
                      balanced throughput in terms of customer ordering time.
                      And also, it would also solve the number of cashiers
                      problem, as we can have as many robots as we need
                      (providing budget exists, but it’s more of an investment
                      for the future as the robots once bought and properly
                      configured would be able to last for a long time).
                    </p>
                    <p>
                      Therefore, we proceeded on defining a set of steps that
                      our robot would have to do in order to fulfill the role of
                      a cashier. We did this by storyboarding an interaction
                      with a customer.
                    </p>
                  </Grid.Row>
                  <Grid.Row>
                    <Segment>
                      <Image alt="Storyboard" src={im3} style={alignStyle} />
                      <Divider />
                      Storyboard 1
                    </Segment>
                  </Grid.Row>
                  <Grid.Row>
                    <Segment>
                      <Image alt="Storyboard" src={im4} style={alignStyle} />
                      <Divider />
                      Storyboard 2
                    </Segment>
                  </Grid.Row>
                  <Grid.Row>
                    <p>
                      From the storyboard, we could see the steps that were
                      needed, so we defined it for our robot. These steps are:
                    </p>
                    <List ordered>
                      <List.Item>Wake up on greeting</List.Item>
                      <List.Item>
                        Ask customer what he/she wants to order
                      </List.Item>
                      <List.Item>Listen to customer order</List.Item>
                      <List.Item>Ask if there are any other orders</List.Item>
                      <List.Item>
                        Repeat 2, 3, 4 until there are no more orders
                      </List.Item>
                      <List.Item>Ask customer to pay</List.Item>
                      <List.Item>Give receipt and thank customer</List.Item>
                    </List>
                    <p>
                      Thus we programmed the robot with the above steps. My
                      major contribution were in these steps, as I provided the
                      main logic and did the storyboarding process.
                    </p>
                    <p>
                      So at the end, we have a finished prototype ready to be
                      tested on users!
                    </p>
                  </Grid.Row>
                  <Grid.Row>
                    <Segment>
                      <Image alt="Programming" src={im5} style={alignStyle} />
                      <Divider />
                      Programming the robot
                    </Segment>
                  </Grid.Row>
                  <Grid.Row>
                    <Header size="medium">Usability Testing</Header>
                    <p>
                      The next part was to test the robot in a use-case
                      scenario. However, we found out that during this usability
                      testing, there was an issue with the choice system that
                      was used after the robot asks a customer whether he or she
                      wants to order something else, the robot crashes multiple
                      times here even though this bug was not that visible in
                      our testings. This bug was repeatedly visible and was also
                      causing other places to fail, thus it caused a big problem
                      for us.
                    </p>
                    <p>
                      Thus we had to fix this by replacing that yes no choice
                      with a more reliable solution. Which is to use tactile
                      sensors. We asked customers to touch the robots hand to
                      indicate a yes or no choice instead. This solved our
                      problems and thus this became the final iteration of our
                      robot.
                    </p>
                  </Grid.Row>
                  <Grid.Row>
                    <Segment>
                      <Image alt="Usability" src={im6} style={alignStyle} />
                      <Divider />
                      Usability testing
                    </Segment>
                  </Grid.Row>
                  <Grid.Row>
                    <Header size="medium">Reflection</Header>
                    <p>
                      At the end of the project, there are two things that I
                      believe that I have picked up from this project. The first
                      is that there is a great deal of improvement that can be
                      done on everyday systems that we take for granted, there
                      are so many things that can be automated, and since we
                      just got to work with a state of the art robotic solution,
                      I was able to see where the current technology is if I
                      wanted to implement something of the sort.
                    </p>
                    <p>
                      The second thing is that I was taught to always iron out
                      any bugs in the system. As we can see here, a problem that
                      did not seem big initially suddenly turned out to be very
                      nasty. This also showed to me the importance of doing use
                      case tests with the customer, as you never know how a
                      customer might interact with something you made, there
                      might be differences in what you think the customer will
                      do and what the customer actually does, causing issues
                      with how the technology you make work.
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
