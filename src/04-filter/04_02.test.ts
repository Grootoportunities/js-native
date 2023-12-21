import { CityType } from "../02-objects/02";
import { demolishHouse, getRightBuilding } from "./04_02";

let city: CityType;

beforeEach(() => {
  city = {
    title: "Soligorsk",
    houses: [
      {
        id: 1,
        buildedAt: 1978,
        repaired: true,
        address: { number: 102, street: { title: "Bogomolova" } },
      },
      {
        id: 2,
        buildedAt: 2000,
        repaired: true,
        address: { number: 5, street: { title: "Molodyozhnaya" } },
      },
      {
        id: 3,
        buildedAt: 1970,
        repaired: false,
        address: { number: 78, street: { title: "Maksima Bogdanovicha" } },
      },
    ],
    governmentBuildings: [
      {
        type: "HOSPITAL",
        budget: 100000,
        stuffCount: 500,
        address: { street: { title: "Oktybrskaya" } },
      },
      {
        type: "FIRE-STATION",
        budget: 40000,
        stuffCount: 100,
        address: { street: { title: "Lenina" } },
      },
    ],
    citizenNumber: 106839,
  };
});

test("Demolish houses on street Bogomolova", () => {
  demolishHouse(city, "Bogomolova");

  expect(city.houses.length).toBe(2);
  expect(city.houses[0].address.street.title).toBe("Molodyozhnaya");
});

test("Should return government building with right stuff count", () => {
  let buildings = getRightBuilding(city.governmentBuildings, 500);

  expect(buildings.length).toBe(1);
  expect(buildings[0].budget).toBe(100000);
});
