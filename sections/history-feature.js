/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container } from "theme-ui";

import TextFeature from "components/text-feature";



export default function HistoryFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="feature">
      <Container>
        
        <TextFeature  title = "Whats the function" subTitle="HISTORY OF AGELINK UBCO" description="Age-Link UBCO, a student association at the University of British Columbia Okanagan, was founded in 2016 by a group of  undergraduate students and mature students. Since its establishment, the club has focused on bridging the generational gap amongst students and seniors at the University and in the local community. Over the past five years, this student association has held several events where the members and guests have the opportunity to make intergenerational and intercultural connections. The  members come from various demographics, backgrounds and professions to make meaningful connections by sharing one another’s experiences. These events leave each of the attendees with a strong sense of empathy and hearts filled with compassion for the other. "/>
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
