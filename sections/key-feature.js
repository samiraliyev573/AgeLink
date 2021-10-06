/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container } from "theme-ui";

import TextFeature from "components/text-feature";

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="about">
      <Container>
        <TextFeature
          title="AGE-LINK SOCIETY DESCRIPTION"
          description="Age-Link Society was incorporated as a non-profit organization under the Societies Act of British Columbia on the 25th of May, 2021. The mission of Age-Link Society is to bridge the gap between the youth and the elderly at different universities across Canada and their local communities.

With the growing sense of isolation amongst seniors in Canada, Age-Link Society is motivated to establish chapters (Age-Link Student Clubs) across Canadian universities, Seniors Homes, and Secondary Schools to pursue its mission. The Non-Profit will coordinate with the student club to hold networking and community oriented events regularly that will be open to students and elders. These events will be designed to benefit all ages. For instance, hosting a ‘Chat and Chill’ event designed to provide an opportunity for students to learn about the elders' life experiences and in turn the elders have the opportunity to meet students from different cultural backgrounds. The main aim is to create long lasting reciprocal relationships/friendships between the different ages.

At Age-Link, the different age groups do not gather to volunteer but to network and socialize. This two-sided relationship bears reciprocal benefits to the age groups. By looking past the prenotions, prejudgements and stereotypes about seniors and younger people, Age-Link Society delves deeper to establish meaningful connections. 
"
        />
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};
