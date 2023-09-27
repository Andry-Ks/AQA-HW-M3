//npx cypress open

import { Login } from "./pages/Login";
const LoginPage = new Login();

import { HomeP } from "./pages/HomePage";
const HomePage = new HomeP();

// Тест №1
describe("Login and Logout Test 1", () => {
  it("should login and logout for user 1", () => {
    // Відкрити сторінку
    LoginPage.navigate();

    // Використовуємо команду login для входу
    LoginPage.signIn1();

    // Знаходимо та клікаємо на кнопку для відкриття меню сайту
    HomePage.openMenu();

    // Знаходимо кнопку "Log out" в меню та клікаємо на неї
    HomePage.logOut();

    // Перевіряємо, що повернулися на сторінку
    HomePage.check();
  });
});

// Тест №2
describe("Login and Logout Test 2", () => {
  it("should login and logout for user 2", () => {
    // Відкрити сторінку
    LoginPage.navigate();

    // Використовуємо команду login для входу
    LoginPage.signIn2();

    // Знаходимо та клікаємо на кнопку для відкриття меню сайту
    HomePage.openMenu();

    // Знаходимо кнопку "Log out" в меню та клікаємо на неї
    HomePage.logOut();

    // Перевіряємо, що повернулися на сторінку
    HomePage.check();
  });
});
