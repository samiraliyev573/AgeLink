/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";

import TextFeature from "components/text-feature";

export default function HistoryFeature() {
  return (
    <section sx={{ variant: "section.coreFeature" }} id="feature">
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            title="History of Agelink UBCO"
            description="Age-Link UBCO, a student club at the University of British Columbia Okanagan, was founded in 2016 by a group of undergraduate students and seniors in the community. Since its establishment, the club has focused on bridging the generational gap amongst students and seniors at the university and in the local community. Over the past five years, this student club has held several events where its members and guests have the opportunity to make intergenerational and intercultural connections. The  members come from various demographics, backgrounds and professions to make meaningful connections by sharing their experiences. These events leave each of the attendees with a strong sense of empathy and hearts filled with compassion for the other. "
          />
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
};
