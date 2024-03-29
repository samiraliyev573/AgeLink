/** @jsx jsx */
import { jsx, Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import TeamCard from "components/team-card";
import { FaLinkedin } from "react-icons/fa";

import Staff1 from "assets/team/staff-1.jpg";
import Staff2 from "assets/team/staff-2.jpg";
import Staff3 from "assets/team/staff-3.jpeg";
import Staff4 from "assets/team/staff-4.jpg";
import Staff5 from "assets/team/staff-5.jpeg";

const data = [
  {
    id: 1,
    imgSrc: Staff1,
    altText: "Patience Okuku Spinoza",
    title: "Patience Okuku Spinoza",
    designation: "Executive Director",

    socialProfile: [
      {
        id: 1,
        name: "linkedIn",
        path: "https://www.linkedin.com/in/okuku-patience-spinoza/",
        icon: <FaLinkedin />,
      },
    ],
  },

];

export default function TeamSectionStaff() {
  return (
    <section>
      <Container>
        <SectionHeader slogan="Our Staff" />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={item.id}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              experience={item.experience}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ["35px 0px", null, 0, null, null, "30px 35px"],
    gridTemplateColumns: [
      "repeat(2,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
  },
};
