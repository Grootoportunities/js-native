// const axios = {
//   googleData: {
//     ip: "168.100.2.92: 6006",
//     data: { vacancies: 12, employers: 2000 },
//   },
//   yahooData: {
//     ip: "168.100.23.312: 9009",
//     data: { vacancies: 50, employers: 633 },
//   },
//   get(request) {
//     return new Promise((res, rej) => {
//       switch (request) {
//         case "google.com":
//           res(this.googleData);
//           break;
//         case "yahoo.com":
//           res(this.yahooData);
//           break;
//         default:
//           rej("No such path has been found");
//       }
//     });
//   },
// };
//
// const makeRequest = (request) =>
//   axios
//     .get(request)
//     .then((res) => res.data)
//     .then((data) => data.vacancies);
//
// makeRequest("google.com")
//   .then((vacancies) => console.log(vacancies))
//   .catch((error) => console.log(error));
//
// makeRequest("yahoo.com")
//   .then((vacancies) => console.log(vacancies))
//   .catch((error) => console.log(error));
//
// const randomNumber = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(Math.random());
//     }, 2000);
//   });
// };
//
// randomNumber().then((number) => console.log(number));
// randomNumber().then((number) => console.log(number));
//
// const repo = {
//   save(data) {
//     return new Promise((res, rej) => {
//       try {
//         localStorage.setItem("Data", JSON.stringify(data));
//         res();
//       } catch {
//         rej("Something went wrong");
//       }
//     });
//   },
// };
//
// repo
//   .save(1230)
//   .then((data) => console.log("SAVED"))
//   .catch((error) => console.warn(error));
//
// const saveToRepo = async () => {
//   await repo.save(123);
//   console.log("SAVED");
// };

// saveToRepo();

// let count = 0;
//
// setTimeout(() => {
//   console.log(++count);
// }, 1000);
//
// setTimeout(() => {
//   console.log(++count);
// }, 2000);
//
// setTimeout(() => {
//   console.log(++count);
// }, 3000);

// const wait = (milliseconds) =>
//   new Promise((res) => setTimeout(res, milliseconds));
//
// const run = async () => {
//   await wait(1000);
//   console.log(1);
//   await wait(2000);
//   console.log(2);
//   await wait(3000);
//   console.log(3);
// };
//
// run();

const axios = {
  users: [
    { userID: 1, name: "Daniil" },
    { userID: 2, name: "Anastasia" },
    { userID: 3, name: "Daryl" },
  ],
};

const findUserInDB = (id) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      axios.users.map((el) => (el.userID === id ? res(el) : el));
      rej("User not found");
    }, 2000);
  });

findUserInDB(3)
  .then((user) => console.log(user.name))
  .catch((error) => console.log(error));
