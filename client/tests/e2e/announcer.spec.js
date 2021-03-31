/// <reference types="Cypress" />;

describe("<announcer /> component", () => {
  beforeEach(() => {
    cy.visit("/Homemade/announcer");
  });

  it("tells me how many or a specific recipe i have", () => {
    cy.visit("/Homemade/announcer");

    cy.get('[data-cy="announcer"]').should("contain.value", "");
  });
});
