import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const testUrlHeroDetail = "http://localhost:4200/detail/2";
const name = "Voltes Man";

Given("I navigate to the Tour of Heroes Website Dashboard", () => {
  cy.visit("http://localhost:4200/dashboard");
});

When("I visit the Tour-of-Heroes Navbar view the title", () => {
  cy.get("#page-title").contains("Tour of Heroes");
});

And("I click  the Navbar list Dashboard", () => {
  cy.get("nav").contains("Dashboard").click();
});

Then("the browser should navigate to the dashboard page", () => {
  cy.url().should("eq", "http://localhost:4200/dashboard");
});

And("I click the Navbar list Heroes", () => {
  cy.get("nav").contains("Heroes").click();
});

Then("the browser should navigate to the Heroes list page", () => {
  cy.url().should("eq", "http://localhost:4200/heroes");
});

// heroes-details
Given(
  "I click one of the list of hero in the Dashboard top 5 or heroes-list",
  () => {
    cy.visit(testUrlHeroDetail);
  }
);

Then("the browser should navigate to the hero-detail page", () => {
  cy.get("#hero-name-upper").should("exist");
  cy.get("#hero-id").should("exist");
  cy.get("[data-cy='hero-name-input']").should("exist");
});

And("I visit the Hero-Detail with the information of hero: name, id", () => {
  cy.get("#hero-name-upper").contains(name.toUpperCase());
  cy.get("#hero-id").contains("2");
  cy.get('[data-cy="hero-name-input"]')
    .invoke("val")
    .should((name) => {
      console.log(name);
    });
});

And("I change the input field of the hero-name", () => {
  cy.get("input").clear().type("Voltes Girl");
});

Then("the name of the hero should change", () => {
  cy.get('[data-cy="hero-name-input"]')
    .invoke("val")
    .should((changeName) => {
      console.log(changeName);
    });
});
