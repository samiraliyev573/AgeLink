/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Performance from "assets/feature/performance.svg";
import Partnership from "assets/feature/partnership.svg";
import Subscription from "assets/feature/subscription.svg";
import Support from "assets/feature/support.svg";

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

export default function Feature() {
  return (
    <section sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader
          slogan="Quality Features"
          title="Amazing useful features"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
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
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      "40px 0",
      null,
      "45px 30px",
      null,
      "60px 50px",
      "70px 50px",
      null,
      "80px 90px",
    ],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"],
  },
};
