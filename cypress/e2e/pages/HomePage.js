export class HomeP {
  openMenu() {
    cy.get("#open-navigation-menu-mobile").click();
  }

  logOut() {
    cy.contains("Log out").click();
  }

  check() {
    cy.url().should("eq", "https://www.edu.goit.global/account/login");
  }
}
