import { MeType } from "../02-objects/02";
import { addSkill, doesHeLiveInCity, doMeInactive } from "./03";

let me: MeType;

beforeEach(() => {
  me = {
    name: "Daniil",
    age: 22,
    isStudent: true,
    address: {
      city: "Minsk",
      country: "Belarus",
      house: 78,
    },
    skills: [
      { id: 1, skill: "HTML" },
      { id: 2, skill: "CSS" },
      { id: 3, skill: "React" },
    ],
  };
});

test.skip("Student shoud learn new skill", () => {
  expect(me.skills.length).toBe(3);
  addSkill(me, "JS");
  expect(me.skills.length).toBe(4);
  expect(me.skills[3].skill).toBe("JS");
  expect(me.skills[2].id).toBeDefined();
});

test.skip("Another me should be inactive", () => {
  expect(me.isStudent).toBe(true);
  doMeInactive(me, false);
  expect(me.isStudent).toBe(false); // тьфу-тьфу-тьфу
});

test.skip("Does another me live in this city?", () => {
  let result = doesHeLiveInCity(me, "Praha");
  let result2 = doesHeLiveInCity(me, "Minsk");

  expect(result).toBe(false);
  expect(result2).toBe(true);
});
