export type StudentsType = {
  name: string;
  age: number;
};

const students: StudentsType[] = [
  { name: "Daniil Lameika", age: 22 },
  { name: "Igor Yudentsev", age: 48 },
  { name: "Vladmimir Morozov", age: 25 },
];

const Transformator = (student: StudentsType) => ({
  stack: ["css", "js", "react", "redux"],
  firstName: student.name.split(" ")[0],
  lastName: student.name.split(" ")[1],
  age: student.age,
});

const dev1 = Transformator(students[0]);
const dev2 = Transformator(students[1]);
const dev3 = Transformator(students[2]);

const newDevs = students.map((student) => ({
  stack: ["css", "js", "react", "redux"],
  firstName: student.name.split(" ")[0],
  lastName: student.name.split(" ")[1],
  age: student.age,
}));

const users = students.map(
  (man) => `Hello, ${man.name.split(" ")[0]!}! Welcome`,
);
