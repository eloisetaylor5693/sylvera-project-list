import React from "react";
import ProjectList from "./index";

describe("<ProjectList />", () => {
  describe("given project data", () => {
    it("renders", () => {
      // see: https://on.cypress.io/mounting-react
      cy.mount(<ProjectList projects={["atlantis", "thunder"]} />);

      cy.get('[data-testid="1"]')
        .should("be.visible")
        .should("contain", "thunder");

      cy.contains("thunder").should("have.attr", "href", "/projects/thunder");
    });
  });

  describe("given no project data", () => {
    it("renders without erroring", () => {
      cy.mount(<ProjectList projects={[]} />);
    });
  });
});
