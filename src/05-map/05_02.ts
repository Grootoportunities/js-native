import { GovernmentBuildings, HousesType } from "../02-objects/02";

export const getStreetsTitlesOfGovernmentBuildings = (
  govB: GovernmentBuildings[],
) => {
  return govB.map((g) => g.address.street.title);
};

export function getHouseStreets(houses: HousesType[]) {
  return houses.map((h) => h.address.street.title);
}

export const getAgeOfBuilding = (houses: HousesType[]) => {
  return houses.map(
    (h) =>
      `House at ${h.address.street.title} street was builded at ${h.buildedAt}`,
  );
};
