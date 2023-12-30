const info = {
  age: 23,
  name: "Daniil",
  address: { street: { title: "Molodyozhnaya" } },
};

console.log(info.address.street.title);
console.log(info["address"]["street"]["title"]);

// type UsersType = {
//   [key: string]: { id: number; name: string };
// };
//
// const users: UsersType = {
//   "1": { id: 10, name: "Cristian" },
//   "2": { id: 20, name: "david" },
//   "3": { id: 30, name: "joe" },
//   "4": { id: 40, name: "tom" },
//   "5": { id: 50, name: "qwe" },
//   "6": { id: 60, name: "op" },
//   "7": { id: 70, name: "name" },
//   "8": { id: 80, name: "guy" },
// };

const user = { id: 90, name: "Anastasia" };

users[user.id] = user;
delete users[user.id];

const usersArray = [
  { id: "10", name: "Cristian" },
  { id: "20", name: "david" },
  { id: "30", name: "joe" },
  { id: "40", name: "tom" },
  { id: "50", name: "qwe" },
  { id: "60", name: "op" },
  { id: "70", name: "name" },
  { id: "80", name: "guy" },
];
