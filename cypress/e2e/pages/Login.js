export class LoginPage {
  navigate() {
    cy.visit("https://www.edu.goit.global/account/login");
  }

 signIn1() {
    cy.login("user888@gmail.com", "1234567890");
 }

  signIn2() {
   cy.login("testowyqa@qa.team", "QA!automation-1");
  }
}
