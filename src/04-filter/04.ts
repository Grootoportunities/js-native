const ages = [18, 29, 35, 2, 30, 95, 42];

const old = [];

const watcher = (age: number) => {
  if (age > 90) return old.push(age);
};

for (let i = 0; i < ages.length; i++) {
  watcher(ages[i]);
}

type courseType = {
  title: string;
  price: number;
};

const courses = [
  { title: "CSS", price: 200 },
  { title: "REDUX", price: 300 },
  { title: "REACT", price: 250 },
];

const cheapCourses = (course: courseType) => {
  return course.price < 250;
};
