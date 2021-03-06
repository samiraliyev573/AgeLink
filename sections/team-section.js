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
import Member3 from "assets/team/member-3.jpeg";
import Member4 from "assets/team/member-4.jpg";
import Member5 from "assets/team/member-5.jpeg";
import Member6 from "assets/team/member-6.jpg";
import Member7 from "assets/team/member-7.jpg";
import Member8 from "assets/team/member-8.jpg";
import Member9 from "assets/team/member-9.jpg";
import Member10 from "assets/team/member-10.jpg";

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: "Rob Velzeboer",
    title: "Rob Velzeboer",
    designation: "Tranq Sleep Care / Madkatz Boxing Club",
    experience: "Clinical Research Assistant / Boxing coach",
    socialProfile: [
      {
        id: 1,
        name: "LinkedIn",
        path: "https://www.linkedin.com/in/rob-velzeboer-abb61659/",
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: "Ali Murtaza Kermali",
    title: "Ali Murtaza Kermali",
    designation: "Green Rays Farms",
    experience: "Assistant Engineer and Agronomist on site, Founder and CEO",
    socialProfile: [],
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: "Chelsea Bigsot",
    title: "Chelsea Bigsot",
    designation: "Interior Health/Travel Medicine and Vaccination Centre",
    experience: "Registered Nurse",
    socialProfile: [
      {
        id: 1,
        name: "linkedin",
        path: "https://www.linkedin.com/in/chelseabigsot/",
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
    imgSrc: Member6,
    altText: "Janice Gatenby",
    title: "Janice Gatenby",
    designation: "Retired nurse",
    experience: "ESL Instructor",
    socialProfile: [],
  },
  {
    id: 7,
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
    id: 8,
    imgSrc: Member8,
    altText: "Shree Nithi Santhagunam",
    title: "Shree Nithi Santhagunam",
    designation: "Strawhouse.Inc",
    experience: "Digital Marketing Coordinator",
    socialProfile: [
      {
        id: 1,
        name: "LinkedIn",
        path: "https://www.linkedin.com/in/shree-nithi-santhagunam-447493157/",
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    id: 9,
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
    id: 10,
    imgSrc: Member10,
    altText: "Ian Cull",
    title: "Ian Cull",
    designation: "University of British Columbia",
    experience: "Ex Deputy Vice Chancellor",
    socialProfile: [
      {
        id: 1,
        name: "linkedIn",
        path: "https://www.linkedin.com/in/ian-cull-960b8716/",
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
