//npx cypress open

import { LoginPage } from "./pages/Login";
const loginPage = new LoginPage();

import { HomePage } from "./pages/HomePage";
const homePage = new HomePage();

// Тест №1
describe("Login and Logout Test 1", () => {
  it("should login and logout for user 1", () => {
    // Відкрити сторінку
    loginPage.navigate();

    // Використовуємо команду login для входу
    loginPage.signIn("user888@gmail.com", "1234567890");

    // Знаходимо та клікаємо на кнопку для відкриття меню сайту
    homePage.openMenu();

    // Знаходимо кнопку "Log out" в меню та клікаємо на неї
    homePage.logOut();

    // Перевіряємо, що повернулися на сторінку
    homePage.check();
  });
});

// Тест №2
describe("Login and Logout Test 2", () => {
  it("should login and logout for user 2", () => {
    // Відкрити сторінку
    loginPage.navigate();

    // Використовуємо команду login для входу
    loginPage.signIn("testowyqa@qa.team", "QA!automation-1");

    // Знаходимо та клікаємо на кнопку для відкриття меню сайту
    homePage.openMenu();

    // Знаходимо кнопку "Log out" в меню та клікаємо на неї
    homePage.logOut();

    // Перевіряємо, що повернулися на сторінку
    homePage.check();
  });
});
