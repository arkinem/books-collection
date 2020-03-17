import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import styled from "styled-components";

export default ({ children }) => (
  <OverlayTrigger
    key={"top"}
    placement={"top"}
    overlay={
      <Tooltip id={`tooltip-top`}>
        {children !== "" ? children : "No value"}
      </Tooltip>
    }
  >
    <Cell variant="secondary">{children}</Cell>
  </OverlayTrigger>
);

const Cell = styled.td`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
`;
