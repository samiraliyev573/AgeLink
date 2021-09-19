/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container } from "theme-ui";

import TextFeature from "components/text-feature";



export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="feature">
      <Container>
        
        <TextFeature  title = "Whats the function" subTitle="AGE-LINK SOCIETY DESCRIPTION" description="Age-Link society was incorporated as a non-profit organization under the Societies Act of British Columbia on the 25th of May, 2021. The Non-Profit will continue the student association’s current mission of bridging the gap between the youth and the elderly at the University and the local community.

With the growing sense of isolation amongst seniors in Canada, Age-Link society is driven by its mission to establish chapters (Age-Link student associations) across Canadian universities, seniors homes, and secondary schools. Being incorporated allows Age-Link Society to  broaden its mission and presence to other University campuses. The Non-Profit will hold networking and community oriented events regularly that will be open to students and elders. These events will be designed to benefit both the ages. For instance, hosting a ‘Chat and Chill’ event designed to provide an opportunity for students to learn about the elders' life experiences and in turn the elders have the opportunity to meet students from different cultural backgrounds. The main aim is to create long lasting reciprocal relationships between the different ages.

At Age-Link, the different age groups do not gather to volunteer but to network and socialize. This two-sided relationship bears reciprocal benefits to the age groups. By looking past the prenotions, prejudgements and stereotypes about seniors, Age-Link society delves deeper to establish meaningful connections. 
"/>
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
