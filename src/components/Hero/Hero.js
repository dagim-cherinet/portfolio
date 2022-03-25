import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello,
        <br />I am Dagim Cherinet
      </SectionTitle>
      <SectionText>
        Computer Engineer and interested in full-stack web development
      </SectionText>
      <Button
        onClick={() => {
          window.location = "https://github.com/dagim-cherinet";
        }}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
