import React, { Component } from "react";
import { Container, Grid, Header, List, Image } from "semantic-ui-react";
// import Dog from "./img/dog.jpeg";

export default class Project1 extends Component {
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
                    <p>
                      As a requirement for the first project of the course, we
                      were asked to implement a personal portfolio site, which
                      you are seeing right now. The project itself consisted of
                      three different parts which I will talk about in detail
                      below.
                    </p>
                  </Grid.Row>
                  <Grid.Row>
                    <Header size="medium">The Wireframe</Header>
                    <p>
                      First I had to make a wireframe of the portfolio site. I
                      had used a mockup tool online for working on this part
                      before, however as I used a trial account the layout is
                      now locked with me having to pay money to unlock it. Even
                      then I wasn’t comfortable with the tool as it was very
                      hard to use. As I write this diary now I believe I
                      should’ve pursued the use of another tool or hand-draw the
                      layout.
                    </p>
                    <p>
                      In the wireframe design, as you can see in the picture, I
                      had initially chosen to use an infinite scrolling style
                      site, where all the content is placed in one page with a
                      top menu bar that is sticking at the top. I majorly
                      believed this to be a standard way of making a portfolio
                      website and assumed that this would just work fine for my
                      use case.
                    </p>
                    <p>
                      However, as the class progressed and we learned many
                      different techniques, I decided that I had to change some
                      things in regards to my design.
                    </p>
                  </Grid.Row>
                  <Grid.Row>
                    <Header size="medium">The High-Fidelity Prototype</Header>
                    <p>
                      First things first, I decided that I wanted to follow a
                      design principle that I would keep my site clean and
                      minimalistic, with as few different contents as possible
                      in a single page. I would try to keep a page focused on a
                      single topic.
                    </p>
                    <p>
                      With respect to my principle and after what has been
                      taught in the lecture, the first thing that I felt that I
                      need to change was to separate the project contents from
                      each other. I realized that there will be a lot of content
                      in each project, and then they will not be related to each
                      other. So following the grouping principle, I decided to
                      separate them into different pages, making sure that
                      readers will not be confused by how the projects are
                      related to each other.
                    </p>
                    <p>
                      The second thing that I decided to put in was a sort of
                      welcome screen in order to make the site feel more
                      friendly to a user who would be looking to read through
                      the site. I achieved this by using the design of ReactJS.
                      I request the user’s name through a single text input
                      request shown on the first time someone visits the page.
                      Then I store that information as a cookie (as you might
                      have noticed), making the information persist over
                      subsequent visits to the site. Thus allowing me to create
                      a personalized welcome screen that welcomes and greets
                      people who visit the page by name, and also allowing some
                      interactions by mentioning the name.
                    </p>
                    <p>
                      The third thing that I decided on was the color scheme. I
                      decided that for the minimalist look I would stick with
                      white and black most of the time. However, a specific
                      difference was in the part where I show the project
                      diaries (which is here by the way!) I decided to color the
                      background a light gray color, which has been shown to
                      have a lighter strain on the eye compared to having a
                      black text on a white background. I also decided to use a
                      sans-serif font instead of a serif font to give the site a
                      more modern look instead of a more traditional newspaper
                      looking style. Again, trying to follow my design principle
                      of keeping the site clean looking.
                    </p>
                    <p>
                      The last feature that I decided on was using a side bar
                      instead of a top bar. As I felt that I would like to keep
                      the text part in the center of the page. Meaning that if I
                      use a top bar, the view of the page would’ve been a bit
                      reduced. Seeing as I have empty space on the sides of the
                      content (due to trying to follow the 960 Grid System
                      Standard) I decided on just using a sidebar.
                    </p>
                  </Grid.Row>
                  <Grid.Row>
                    <Header size="medium">The Final Version</Header>
                    <p>
                      Not much was changed between the High Fidelity Prototype.
                      It mostly involved solving some bugs in the development of
                      the high fidelity prototype and changing a few items in
                      the UI.
                    </p>
                    <p>
                      The major change is replacing the links to the projects
                      with cards. So that the user actually has directly
                      presentable information about each project that they can
                      see before clicking on the link to project.
                    </p>
                  </Grid.Row>
                  {/*<Grid.Row columns={2}>*/}
                  {/*<Grid.Column>*/}
                  {/*<List bulleted>*/}
                  {/*<List.Item>Loren</List.Item>*/}
                  {/*<List.Item>Loren ipsum</List.Item>*/}
                  {/*<List.Item>*/}
                  {/*Loren ipsum*/}
                  {/*<List.List>*/}
                  {/*<List.Item>Loren ipsum</List.Item>*/}
                  {/*<List.Item>Loren ipsum</List.Item>*/}
                  {/*<List.Item>Loren ipsum</List.Item>*/}
                  {/*</List.List>*/}
                  {/*</List.Item>*/}
                  {/*<List.Item>Loren ipsum dolor sit</List.Item>*/}
                  {/*</List>*/}
                  {/*</Grid.Column>*/}
                  {/*<Grid.Column>*/}
                  {/*<Image src={Dog} fluid />*/}
                  {/*</Grid.Column>*/}
                  {/*</Grid.Row>*/}
                </Grid>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
