import React, { SFC } from "react";
import styled from "../theme";
interface AboutProps {
  content?: string;
}

const PageWrapper = styled.div`
  padding: 1% 3%;
`;

const ContentWrapper = styled.p`
  font-size: 20px;
  line-height: 1.4em;
`;

export const About: SFC<AboutProps> = props => (
  <PageWrapper>
    <h1>About</h1>
    <ContentWrapper>{props.content}</ContentWrapper>
  </PageWrapper>
);

About.defaultProps = {
  content: `About content here`
};
