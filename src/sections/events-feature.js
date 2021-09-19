/** @jsx jsx */
import { jsx, Container, Box, Image } from "theme-ui";
import TextFeature from "components/text-feature";

import EventImage from "assets/event-image.jpg";
import shapePattern from "assets/shape-pattern2.png";

const data = {
  subTitle: "EVENTS HELD IN THE PAST  ",
  title: "Gala nights, Chat and chill and Online",
  description:
    "Age-Link student association has held several heart warming events in the past for its members. The organization will continue to offer such networking events. Due to the existing COVID-19 pandemic, a majority of the events will be offered online to account for the various restrictions that are put in place by the government. Once the restrictions relax, the organization will transition back to offering in-person events in compliance with the respective university and seniors society’s COVID-19 rules. These networking events will expand to incorporate potential summer camp packages for seniors and students.",
  btnName: "Get Started",
  btnURL: "#",
};

export default function EventsFeature() {
  return (
    <section sx={{ variant: "section.coreFeature" }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={EventImage} alt="Thumbnail" />
          <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt="Shape" />
          </Box>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: ["wrap", null, null, "nowrap"],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, "30px", 0],
    textAlign: ["center", null, null, "left"],
    width: ["100%", "80%", null, 340, 400, 430, null, 485],
    pb: ["50px", "60px", null, 0],
    mx: ["auto", null, null, 0],
    ".description": {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: "inline-flex",
    position: "relative",
    mr: "auto",
    ml: ["auto", null, null, null, 7],
    "> img": {
      position: "relative",
      zIndex: 1,
      height: [310, "auto"],
    },
  },
  shapeBox: {
    position: "absolute",
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ["none", "inline-block", "none", null, "inline-block"],
  },
};
