export class LoginPage {
  navigate() {
    cy.visit("https://www.edu.goit.global/account/login");
  }

  signIn(email, password) {
    cy.login(email, password);
  }

}
