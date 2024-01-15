export type UserType = {
  name: string;
  age: number;
  address: { city: string; street: string };
};

export type UserLaptopType = UserType & {
  laptop: LaptopType;
};

export type UserBooksType = UserType & {
  books: string[];
};

export type UserCompaniesType = UserType & { companies: CompaniesType[] };

export type LaptopType = {
  title: string;
};

export type CompaniesType = {
  id: number;
  title: string;
};

export function increaseAge(u: UserType) {
  const userCopy = { ...u, age: u.age + 1 }; // Подсунул новое ведро для того, чтобы вложить в него копию всех старый значений в объекте user

  return userCopy;
}

export function moveUser(u: UserLaptopType, city: string) {
  return { ...u, address: { ...u.address, city } };
}

export function upgradeUserLaptop(u: UserLaptopType, laptopTitle: string) {
  return { ...u, laptop: { ...u.laptop, title: laptopTitle } };
}

export function MoveUserToAnotherStreet(
  u: UserLaptopType & UserBooksType,
  newStreet: string,
) {
  return { ...u, address: { ...u.address, street: newStreet } };
}

export function AddBook(u: UserLaptopType & UserBooksType, newBook: string) {
  return { ...u, books: [newBook, ...u.books] };
}

export function AddArrayOfBooks(
  u: UserLaptopType & UserBooksType,
  newBooks: string[],
) {
  return { ...u, books: [...u.books, ...newBooks] };
}

export function ReplaceBook(
  u: UserLaptopType & UserBooksType,
  oldBook: string,
  newBook: string,
) {
  return {
    ...u,
    books: u.books.map((b) => (b === oldBook ? newBook : b)),
  };
}

export const DeleteBook = (
  u: UserLaptopType & UserBooksType,
  bookToDelete: string,
) => ({ ...u, books: u.books.filter((b) => b !== bookToDelete) });

export const AddCompanie = (
  u: UserLaptopType & UserBooksType & UserCompaniesType,
  newCompanieTitle: string,
  id: number,
) => {
  let newCompanie: CompaniesType = { id: id, title: newCompanieTitle };

  return { ...u, companies: [...u.companies, newCompanie] };
};

export const UpdateCompany = (
  u: UserLaptopType & UserBooksType & UserCompaniesType,
  oldCompanyTitle: string,
  newCompanieTitle: string,
) => ({
  ...u,
  companies: u.companies.map((c) =>
    c.title === oldCompanyTitle ? { ...c, title: newCompanieTitle } : c,
  ),
});

export const UpdateCompanyAssociate = (
  companies: { [key: string]: CompaniesType[] },
  userName: string,
  companyID: number,
  newCompanyTitle: string,
) => ({
  ...companies,
  [userName]: companies[userName].map((c) =>
    c.id === companyID ? { ...c, title: newCompanyTitle } : c,
  ),
});
