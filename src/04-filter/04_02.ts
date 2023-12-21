import { CityType, GovernmentBuildings } from "../02-objects/02";

export function demolishHouse(city: CityType, street: string) {
  return (city.houses = city.houses.filter(
    (el) => el.address.street.title !== street,
  ));
}

export const getRightBuilding = (
  govBuilding: GovernmentBuildings[],
  stuffCount: number,
) => {
  return govBuilding.filter((g) => g.stuffCount === stuffCount);
};
