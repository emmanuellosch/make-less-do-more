/// <reference types="Cypress" />;

describe("<RecipeCard /> component", () => {
  beforeEach(() => {
    cy.visit("/Homemade");
  });

  it("should display", () => {
    cy.visit("/Homemade");

    cy.get("[recipes]").should("be.visible");
  });
});
