import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((project) => (
        <BlogCard key={project.id}>
          <Img src={project.image} />
          <TitleContent>
            <HeaderThree title="true">{project.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{project.description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {project.tags.map((tag, i) => (
                <tag key={i}>{tag}</tag>
              ))}
            </TagList>
            <UtilityList>
              <ExternalLinks href={project.visit}>Visit</ExternalLinks>
              <ExternalLinks href={project.source}>Code</ExternalLinks>
            </UtilityList>
          </div>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
