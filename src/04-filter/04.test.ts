test.skip("Should take old men (older than 90)", () => {
  const ages = [18, 29, 35, 2, 30, 95, 42];

  const old = ages.filter((age) => age > 90);

  expect(old.length).toBe(1);
  expect(old[0]).toBe(95);
});

test.skip("Should return cheap courses", () => {
  const courses = [
    { title: "CSS", price: 200 },
    { title: "REDUX", price: 300 },
    { title: "REACT", price: 250 },
  ];

  const cheapCourse = courses.filter((course) => course.price < 250);
  expect(cheapCourse.length).toBe(1);
  expect(cheapCourse[0].price).toBe(200);
});

test.skip("Should return completed tasks", () => {
  const technologiesToLearn = [
    { id: 1, technologie: "CSS", isDone: true },
    {
      id: 1,
      technologie: "JS",
      isDone: false,
    },
    { id: 1, technologie: "React", isDone: false },
    { id: 1, technologie: "Redux", isDone: false },
  ];

  const learnedTechnologies = technologiesToLearn.filter((el) => el.isDone);

  expect(learnedTechnologies.length).toBe(1);
  expect(learnedTechnologies[0].technologie).toBe("CSS");
  expect(learnedTechnologies[0].id).toBe(1);
});

test.skip("Should return uncompleted tasks", () => {
  const technologiesToLearn = [
    { id: 1, technologie: "CSS", isDone: true },
    {
      id: 2,
      technologie: "JS",
      isDone: false,
    },
    { id: 3, technologie: "React", isDone: false },
    { id: 4, technologie: "Redux", isDone: false },
  ];

  const unlearnedTechnologies = technologiesToLearn.filter((el) => !el.isDone);

  expect(unlearnedTechnologies.length).toBe(3);
  expect(unlearnedTechnologies[0].technologie).toBe("JS");
  expect(unlearnedTechnologies[0].id).toBe(2);
});
