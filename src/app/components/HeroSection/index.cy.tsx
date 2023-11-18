import React from "react";
import HeroSection from "./index";

describe("<HeroSection />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HeroSection />);

    cy.get('[data-testid="hero-image"]').should("be.visible");
  });
});
