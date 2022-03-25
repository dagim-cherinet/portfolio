import React from "react";
import { DiFirebase, DiNodejs, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with wide range of technologies in web development world.
      From Back-end To Desgin.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          React.js, HTML, CSS & js
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          Node.js and Express.js
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListTitle>Databases</ListTitle>
        <ListParagraph>
          Experience with <br />
          Relational and Non-relational
        </ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
