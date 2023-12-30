import { InfoType } from "./Destructuring";

let info: InfoType;

beforeEach(() => {
  info = {
    name: "Daniil",
    age: 22,
    tech: [
      { title: "CSS" },
      { title: "JavaScript", tName: "what name" },
      { title: "React" },
    ],
    address: { street: { stname: "Lomonosova" } },
  };
});

test.skip("obj dist", () => {
  const { name, age } = info;
  const { stname } = info.address.street;

  expect(name).toBe("Daniil");
  expect(age).toBe(22);
  expect(stname).toBe("Lomonosova");
});

test.skip("massive dist", () => {
  const [, tech2, ...restTech] = info.tech;

  // expect(tech1.title).toBe("CSS");
  expect(tech2.title).toBe("JavaScript");
  expect(restTech.length).toBe(1);
  expect(restTech[0].title).toBe("React");
  expect(tech2).toStrictEqual({ title: "JavaScript", tName: "what name" });
});
