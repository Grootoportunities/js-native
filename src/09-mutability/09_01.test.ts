function userAgeIncrease(u: UserType) {
  u.age++;
}

type UserType = {
  name: string;
  age: number;
  address: { title: string };
};

test.skip("Reference type test", () => {
  const user: UserType = {
    name: "Daniil",
    age: 22,
    address: { title: "Soligorsk" },
  };

  userAgeIncrease(user);

  expect(user.age).toBe(23);

  const Glisson = user;

  Glisson.age = 30;

  expect(user.age).toBe(30);
});

test.skip("Array type test", () => {
  const users = [
    { name: "Daniil", age: 22 },
    { name: "Anastasia", age: 22 },
  ];

  const admins = users;

  admins.push({ name: "Nikita", age: 13 });

  expect(users[2].age).toBe(13);
  expect(users[2]).toEqual({ name: "Nikita", age: 13 });
});

test.skip("Value type test", () => {
  const usersCount = 100;

  let adminsCount = usersCount;
  adminsCount++;

  expect(usersCount).toBe(100);
  expect(adminsCount).toBe(101);
});

test.skip("TwoReference type test", () => {
  const user: UserType = {
    name: "Daniil",
    age: 22,
    address: { title: "Soligorsk" },
  };

  const user2: UserType = {
    name: "Anastasia",
    age: 22,
    address: user.address,
  };

  user2.address.title = "Krasnodar";

  expect(user.address.title).toBe("Krasnodar");
});

test.skip("Reference type Array test", () => {
  const user: UserType = {
    name: "Daniil",
    age: 22,
    address: { title: "Soligorsk" },
  };

  const user2: UserType = {
    name: "Anastasia",
    age: 22,
    address: user.address,
  };

  const users = [
    user,
    user2,
    { name: "Yrka", age: 12411245209, address: user.address },
  ];

  users[2].address.title = "Hell";

  expect(user.address.title).toBe("Hell");
  expect(user2.address.title).toBe("Hell");
  // const users = [
  //   { name: "Daniil", age: 22 },
  //   { name: "Anastasia", age: 22 },
  // ];
  //
  // const users2 = [
  //   { name: "Vladimir", age: 69 },
  //   { name: "Aleksandr", age: users[1].age },
  // ];
  //
  // users2[1].age = 70;
  //
  // expect(users[1].age).toBe(70);
});
