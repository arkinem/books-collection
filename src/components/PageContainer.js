import React from "react";
import styled from "styled-components";
import colors from "../helpers/colors";

export default ({ children }) => (
  <Container>
    <ContentContainer>{children}</ContentContainer>
  </Container>
);

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
`;

const ContentContainer = styled.div`
  margin: 20px 0;
  max-width: 94%;
  min-width: 350px;
  padding: 16px;
  border-radius: 4px;
  background: ${colors.background};
  display: flex;
  flex-direction: column;
`;
