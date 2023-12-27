import { StudentsType } from "./05";

let students: StudentsType[] = [];

beforeEach(() => {
  students = [
    { name: "Daniil Lameika", age: 22 },
    { name: "Igor Yudentsev", age: 48 },
    { name: "Vladimir Morozov", age: 25 },
  ];
});

test.skip("Should return array of greetings", () => {
  const message = students.map((s) => `Hello ${s.name.split(" ")[0]}`);

  expect(message.length).toBe(3);
  expect(message[0]).toBe("Hello Daniil");
  expect(message[1]).toBe("Hello Igor");
  expect(message[2]).toBe("Hello Vladimir");
});
