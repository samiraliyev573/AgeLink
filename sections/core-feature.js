/** @jsx jsx */
import { jsx, Container, Box, Image } from "theme-ui";
import TextFeature from "components/text-feature";

import FeatureThumb from "assets/open-chapter.jpg";
import shapePattern from "assets/shape-pattern2.png";

const data = {
  title: "OPEN A CHAPTER AT YOUR UNIVERSITY",
  description:
    "To pursue its mission of bridging the generational gap amongst students and seniors across Canadian universities, Age-Link Society will offer assistance to student clubs from various universities. These student clubs from different Canadian universities and colleges will solicit their respective student unions to open an Age-Link Student Club at their respective campuses. Age-Link society will function as headquarters that the student clubs turn to for counsel at all times. Student clubs will be guided by the Programs Director at Age-Link Society to make informed decisions to successfully establish an Age-Link Club at their institution. ",
  btnName: "Get Started",
  btnURL: "#",
};

export default function CoreFeature() {
  return (
    <section sx={{ variant: "section.coreFeature" }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={FeatureThumb} alt="Thumbnail" />
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
