import { CityType } from "../02-objects/02";
import {
  changeBudget,
  moreBudget,
  repairHouse,
  toFireStaff,
  toHireStaff,
} from "./03";

let city: CityType;

beforeEach(() => {
  city = {
    title: "Soligorsk",
    houses: [
      {
        buildedAt: 1978,
        repaired: true,
        address: { number: 102, street: { title: "Bogomolova" } },
      },
      {
        buildedAt: 2000,
        repaired: true,
        address: { number: 5, street: { title: "Molodyozhnaya" } },
      },
      {
        buildedAt: 1970,
        repaired: false,
        address: { number: 78, street: { title: "Maksima Bogdanovicha" } },
      },
    ],
    governmentBuildings: [
      {
        type: "HOSPITAL",
        budget: 100000,
        stuffCount: 200,
        address: { street: { title: "Oktybrskaya" } },
      },
      {
        type: "FIRE-STATION",
        budget: 500000,
        stuffCount: 180,
        address: { street: { title: "Lenina" } },
      },
    ],
    citizenNumber: 106839,
  };
});

test.skip("First house should be correct", () => {
  expect(city.houses[0].buildedAt).toBe(1978);
  expect(city.houses[0].repaired).toBe(true);
  expect(city.houses[0].address.number).toBe(102);
  expect(city.houses[0].address.street.title).toBe("Bogomolova");
  expect(city.citizenNumber).toBe(106839);
});

test("Give money to budget for HOSPITAL", () => {
  expect(city.governmentBuildings[0].budget).toBe(100000);
  moreBudget(city.governmentBuildings[0], 200000);
  expect(city.governmentBuildings[0].budget).toBe(300000);
});

test("Budget should be changed for FIRE-STATION", () => {
  expect(city.governmentBuildings[1].budget).toBe(500000);
  changeBudget(city.governmentBuildings[1], 100000);
  expect(city.governmentBuildings[1].budget).toBe(400000);
});

test("House should be repaired", () => {
  repairHouse(city.houses[0], true);
  expect(city.houses[1].repaired).toBeTruthy();
});

test("staff should be increased", () => {
  toFireStaff(city.governmentBuildings[0], 20);
  expect(city.governmentBuildings[0].stuffCount).toBe(180);
});

test("staff should be hire", () => {
  toHireStaff(city, 20);
  expect(city.governmentBuildings[0].stuffCount).toBe(220);
});
