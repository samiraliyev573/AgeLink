import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";

import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "../sections/banner";
import KeyFeature from "../sections/key-feature";
import ServiceSection from "../sections/service-section";
import Feature from "../sections/feature";
import CoreFeature from "../sections/core-feature";

import TeamSection from "../sections/team-section";
import TestimonialCard from "../sections/testimonial";
import EventsFeature from "sections/events-feature";
import Subscribe from "sections/subscribe";
import TeamSectionStaff from "sections/team-section-staff";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Age Link" />
        <Banner />
        <KeyFeature />
        <EventsFeature />
        <ServiceSection />
        <Feature />
        <CoreFeature />
        <TeamSection />
        <TeamSectionStaff />
        <TestimonialCard />
       
       
        <Subscribe />
      </Layout>
    </ThemeProvider>
  );
}
