describe("visit website", () => {
  it("visits website", () => {
    cy.visit("localhost:3000");
  });
  it("title appears", () => {
    cy.visit("localhost:3000");
    cy.contains("say hello");
  });
});
