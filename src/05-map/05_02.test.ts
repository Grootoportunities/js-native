import { CityType } from "../02-objects/02";
import {
  getAgeOfBuilding,
  getHouseStreets,
  getStreetsTitlesOfGovernmentBuildings,
} from "./05_02";

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

test.skip("Should return list of street titles", () => {
  let streets = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);

  expect(streets.length).toBe(2);
  expect(streets[0]).toBe("Oktybrskaya");
  expect(streets[1]).toBe("Lenina");
});

test.skip("Should return list of houses street", () => {
  let houseStreets = getHouseStreets(city.houses);

  expect(houseStreets.length).toBe(3);
  expect(houseStreets[0]).toBe("Bogomolova");
  expect(houseStreets[1]).toBe("Molodyozhnaya");
  expect(houseStreets[2]).toBe("Maksima Bogdanovicha");
});

test.skip("Should return age of build", () => {
  let ages = getAgeOfBuilding(city.houses);

  expect(ages.length).toBe(3);
  expect(ages[1]).toBe("House at Molodyozhnaya street was builded at 2000");
});
