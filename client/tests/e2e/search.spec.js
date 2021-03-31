/// <reference types="Cypress" />;

describe("<search /> component", () => {
  beforeEach(() => {
    cy.visit("/Homemade/search");
  });

  it("let me search through and display my Recipes", () => {
    cy.visit("/Homemade/search");

    cy.get('input[type="text"]').type("beeswax");
    cy.get("button[type='submit']").click();
  });
});
