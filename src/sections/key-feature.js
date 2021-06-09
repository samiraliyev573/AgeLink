/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Performance from "assets/key-feature/performance.svg";
import Partnership from "assets/key-feature/partnership.svg";
import Subscription from "assets/key-feature/subscription.svg";
import Support from "assets/key-feature/support.svg";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Fast Delivery",
    title: "Fast Delivery",
    text: "Let’s just get this out of the way - sometimes it is hard to get your favorite plant or flower delivered to your door. Thats were we come in",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Free and Pro Subscription",
    title: "Free and Pro Subscription",
    text: "We believe it’s important for everyone to have access to software – especially when it comes to helping the environment and raising beautiful flowers",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "Crypt Currenty",
    title: "Crypto Curreny",
    text: "We make growing money on trees a real deal.",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "Customer Support",
    title: "Customer Support",
    text: "Our mobile app will help you throughout your journey and answer all of your questions. We will also provide you with 24/7 customer support.",
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="feature">
      <Container>
        <SectionHeader
          slogan="Whats the function"
          title="Meet the future of our product"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
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
