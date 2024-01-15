import {
  increaseAge,
  moveUser,
  upgradeUserLaptop,
  UserLaptopType,
  UserType,
  UserBooksType,
  MoveUserToAnotherStreet,
  AddBook,
  AddArrayOfBooks,
  ReplaceBook,
  DeleteBook,
  UserCompaniesType,
  AddCompanie,
  UpdateCompany,
  UpdateCompanyAssociate,
} from "./10";

test("Reference type test", () => {
  let user: UserType = {
    name: "Daniil",
    age: 22,
    address: { city: "Minsk", street: "Maxima Bohdanovicha" },
  };

  const olderUser = increaseAge(user);

  expect(olderUser.age).toBe(23);
  expect(user.age).toBe(22);
  expect(olderUser.address).toBe(user.address);
});

test("Change user Address", () => {
  let user: UserLaptopType = {
    name: "Daniil",
    age: 22,
    address: { city: "Minsk", street: "Maxima Bohdanovicha" },
    laptop: { title: "ASUS" },
  };

  const movedUser = moveUser(user, "Praha");

  expect(user).not.toBe(movedUser);
  expect(user.address).not.toBe(movedUser.address);
  expect(user.laptop).toBe(movedUser.laptop);
  expect(user.address.city).toBe("Minsk");
  expect(movedUser.address.city).toBe("Praha");
});

test("Upgrade user laptop", () => {
  let user: UserLaptopType = {
    name: "Daniil",
    age: 22,
    address: { city: "Minsk", street: "Maxima Bohdanovicha" },
    laptop: { title: "ASUS" },
  };

  const userWithUpgradedLaptop = upgradeUserLaptop(user, "MacBook Air Pro Max");

  expect(userWithUpgradedLaptop.laptop.title).toBe("MacBook Air Pro Max");
  expect(user.laptop.title).toBe("ASUS");
  expect(userWithUpgradedLaptop.address).toBe(user.address);
});

test("Move user to another street", () => {
  let user: UserLaptopType & UserBooksType = {
    name: "Daniil",
    age: 22,
    address: { city: "Minsk", street: "Maxima Bohdanovicha" },
    laptop: { title: "ASUS" },
    books: ["451 of Fahrenheit", "1984", "Book of five circles"],
  };

  const movedStreetUser = MoveUserToAnotherStreet(user, "Molodyozhnaya");

  expect(user.address.street).toBe("Maxima Bohdanovicha");
  expect(movedStreetUser.address.street).toBe("Molodyozhnaya");
  expect(movedStreetUser.books).toBe(user.books);
  expect(user.address).not.toBe(movedStreetUser.address);
});

test("Add book to user collection", () => {
  let user: UserLaptopType & UserBooksType = {
    name: "Daniil",
    age: 22,
    address: { city: "Minsk", street: "Maxima Bohdanovicha" },
    laptop: { title: "ASUS" },
    books: ["451 of Fahrenheit", "1984", "Book of five circles"],
  };

  const newCollectionOfBooksUser = AddBook(user, "Rich Papa, Poor Papa");

  expect(newCollectionOfBooksUser.books).not.toBe(user.books);
  expect(user.address).toBe(newCollectionOfBooksUser.address);
  expect(newCollectionOfBooksUser.books[0]).toBe("Rich Papa, Poor Papa");
  expect(user.books).not.toBe(newCollectionOfBooksUser.books);
});
test("Add array of books to user collection", () => {
  let user: UserLaptopType & UserBooksType = {
    name: "Daniil",
    age: 22,
    address: { city: "Minsk", street: "Maxima Bohdanovicha" },
    laptop: { title: "ASUS" },
    books: ["451 of Fahrenheit", "1984", "Book of five circles"],
  };

  const newCollectionOfBooksUser = AddArrayOfBooks(user, [
    "Rich Papa",
    "Poor Papa",
  ]);

  expect(newCollectionOfBooksUser.books).not.toBe(user.books);
  expect(user.address).toBe(newCollectionOfBooksUser.address);
  expect(newCollectionOfBooksUser.books[3]).toBe("Rich Papa");
  expect(user.books).not.toBe(newCollectionOfBooksUser.books);
});

test("Replace book", () => {
  let user: UserLaptopType & UserBooksType = {
    name: "Daniil",
    age: 22,
    address: { city: "Minsk", street: "Maxima Bohdanovicha" },
    laptop: { title: "ASUS" },
    books: ["451 of Fahrenheit", "1984", "Book of five circles"],
  };

  const userWithReplacedBook = ReplaceBook(user, "1984", "1985");

  expect(userWithReplacedBook.books[1]).toBe("1985");
  expect(user.books).not.toBe(userWithReplacedBook.books);
});

test("Delete book", () => {
  let user: UserLaptopType & UserBooksType = {
    name: "Daniil",
    age: 22,
    address: { city: "Minsk", street: "Maxima Bohdanovicha" },
    laptop: { title: "ASUS" },
    books: ["451 of Fahrenheit", "1984", "Book of five circles"],
  };

  const userWithDeleteBooksCollection = DeleteBook(user, "451 of Fahrenheit");

  expect(userWithDeleteBooksCollection.books.length).toBe(2);
  expect(user.books.length).toBe(3);
  expect(user.books).not.toBe(userWithDeleteBooksCollection.books);
});

test("User companies add", () => {
  let user: UserLaptopType & UserBooksType & UserCompaniesType = {
    name: "Daniil",
    age: 22,
    address: { city: "Minsk", street: "Maxima Bohdanovicha" },
    laptop: { title: "ASUS" },
    books: ["451 of Fahrenheit", "1984", "Book of five circles"],
    companies: [
      { id: 1, title: "SumLab" },
      { id: 2, title: "Niva Motorss" },
    ],
  };

  const userWithNewCompanie = AddCompanie(user, "Google", 3);

  expect(userWithNewCompanie.companies.length).toBe(3);
  expect(user.companies.length).toBe(2);
  expect(userWithNewCompanie.companies[2].title).toBe("Google");
});

test("User company update", () => {
  let user: UserLaptopType & UserBooksType & UserCompaniesType = {
    name: "Daniil",
    age: 22,
    address: { city: "Minsk", street: "Maxima Bohdanovicha" },
    laptop: { title: "ASUS" },
    books: ["451 of Fahrenheit", "1984", "Book of five circles"],
    companies: [
      { id: 1, title: "SumLab" },
      { id: 2, title: "Niva Motors" },
    ],
  };

  const userWithUpdatedCompany = UpdateCompany(user, "Niva Motors", "Facebook");

  expect(userWithUpdatedCompany.companies[1].title).toBe("Facebook");
  expect(user.companies[1].title).toBe("Niva Motors");
});

test("Companies with associate array", () => {
  const companies = {
    Daniil: [
      { id: 1, title: "Epam" },
      { id: 2, title: "IT-Hard" },
    ],
    Alexey: [{ id: 3, title: "Innowise" }],
  };

  const updatedCompany = UpdateCompanyAssociate(
    companies,
    "Daniil",
    2,
    "Netflix",
  );

  expect(updatedCompany["Daniil"][1].title).toBe("Netflix");
  expect(companies["Daniil"][1].title).toBe("IT-Hard");
  expect(companies["Alexey"]).toBe(updatedCompany["Alexey"]);
});
