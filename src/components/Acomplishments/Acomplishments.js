import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 20, text: "Watching Football" },
  { number: 1000, text: "Building Arduino projects" },
  { number: 1900, text: "Programming" },
  { number: 5000, text: "Watching Movies" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>My Hobbies</SectionTitle>
    <Boxes>
      {data.map((item, index) => (
        <Box key={index}>
          <BoxText>{item.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
