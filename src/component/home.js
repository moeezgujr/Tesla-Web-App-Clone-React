import React from "react";
import styled from "styled-components";
import Section from "./section";
function home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Show Now"
      />
    </Container>
  );
}

export default home;
const Container = styled.div`
  height: 100vh;
`;
