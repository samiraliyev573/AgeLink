/** @jsx jsx */
import { jsx, Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import TeamCard from "components/team-card";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import Member1 from "assets/team/member-1.jpg";
import Member2 from "assets/team/member-2.jpg";
import Member4 from "assets/team/member-4.jpg";
import Member5 from "assets/team/member-5.jpeg";
import Member7 from "assets/team/member-7.jpg";
import Member9 from "assets/team/member-9.jpg";
import Member11 from "assets/team/member-11.png";

const data = [
  
  {
    id: 1,
    imgSrc: Member2,
    altText: "Ali Murtaza Kermali",
    title: "Ali Murtaza Kermali",
    designation: "Green Rays Farms",
    experience: "Assistant Engineer and Agronomist on site, Founder and CEO",
    socialProfile: [],
  },
  
  {
    id: 2,
    imgSrc: Member4,
    altText: "Eric li",
    title: "Eric li",
    designation: "UBC Faculty of management",
    experience: "Associate professor",
    socialProfile: [
      {
        id: 1,
        name: "LinkedIn",
        path: "https://www.linkedin.com/in/eric-li-238ab945/",
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Member5,
    altText: "Hannah Linnea Wilkinson",
    title: "Hannah Linnea Wilkinson",
    designation: "Hannah Linnea longevity",
    experience: "Founder, CEO",
    socialProfile: [
      {
        id: 1,
        name: "LinkedIn",
        path: "https://www.linkedin.com/in/hannah-linnea-84abba1b9/",
        icon: <FaLinkedin />,
      },

      {
        id: 3,
        name: "instagram",
        path: "https://instagram.com/imhannahlinnea?utm_medium=copy_link",
        icon: <FaInstagram />,
      },
    ],
  },
  
  {
    id: 4,
    imgSrc: Member7,
    altText: "Joseph Joel Onyango",
    title: "Joseph Joel Onyango",
    designation: "Aspiring CPA",
    experience: "",
    socialProfile: [
      {
        id: 1,
        name: "linkedIn",
        path: "https://www.linkedin.com/in/onyango-joseph-joel-31716114b/",
        icon: <FaLinkedin />,
      },
    ],
  },
  
  {
    id: 5,
    imgSrc: Member9,
    altText: "Daniel Kandie",
    title: "Daniel Kandie",
    designation: "University of Oxford",
    experience: "M.Sc Student",
    socialProfile: [
      {
        id: 1,
        name: "LinkedIn",
        path: "https://www.linkedin.com/in/daniel-kandie-336857128/",
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 6,
    imgSrc: Member11,
    altText: "Shiven Vinod Khera",
    title: "Shiven Vinod Khera",
    designation: "Entrepreneur",
    socialProfile: [
      {
        id: 1,
        name: "LinkedIn",
        path: "https://www.linkedin.com/in/shiven-vinod-khera-a05149120",
        icon: <FaLinkedin />,
      },
    ],
  },
  
];

export default function TeamSection() {
  return (
    <section id="team">
      <Container>
        <SectionHeader
          slogan="Board of Directors"
          // title="The most qualified and talented individuals"
          title=""
        />
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
