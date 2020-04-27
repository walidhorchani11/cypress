/// <reference types="cypress" />

describe("our first suite", () => {
  it("first test ...", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    cy.get("input");
  });
});
