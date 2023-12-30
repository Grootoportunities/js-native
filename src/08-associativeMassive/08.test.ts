type UsersType = {
  [key: string]: { id: number; name: string };
};

let users: UsersType;

beforeEach(() => {
  users = {
    "1": { id: 10, name: "Cristian" },
    "2": { id: 20, name: "david" },
    "3": { id: 30, name: "joe" },
    "4": { id: 40, name: "tom" },
    "5": { id: 50, name: "qwe" },
    "6": { id: 60, name: "op" },
    "7": { id: 70, name: "name" },
    "8": { id: 80, name: "guy" },
  };
});

test("Should add new user", () => {
  expect(users[2].name).toBe("david");

  let user = { id: 9, name: "Daniil" };
  users[user.id] = user;

  expect(users[9].id).toBe(9);
});

test("Should delete user", () => {
  delete users[1];

  expect(users[1]).toBe(undefined);
});
