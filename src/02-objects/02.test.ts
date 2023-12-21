import { CityType } from "./02";

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
    ],
    citizenNumber: 106839,
  };
});

test("First house should be correct", () => {
  expect(city.houses[0].buildedAt).toBe(1978);
  expect(city.houses[0].repaired).toBe(true);
  expect(city.houses[0].address.number).toBe(102);
  expect(city.houses[0].address.street.title).toBe("Bogomolova");
  expect(city.citizenNumber).toBe(106839);
});
