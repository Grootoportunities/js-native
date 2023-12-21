import {
  CityType,
  GovernmentBuildings,
  HousesType,
  MeType,
} from "../02-objects/02";
import { stat } from "fs";

export const addSkill = (anotherMe: MeType, skill: string) => {
  anotherMe.skills.push({ id: new Date().getTime(), skill: skill });
};

export const doMeInactive = (anotherMeInactive: MeType, active: boolean) => {
  anotherMeInactive.isStudent = false;
};

export function doesHeLiveInCity(anotherMeInCity: MeType, city: string) {
  return anotherMeInCity.address.city === city;
}

export const moreBudget = (building: GovernmentBuildings, money: number) => {
  building.budget += money;
};

export function changeBudget(station: GovernmentBuildings, cash: number) {
  station.budget -= cash;
}

export const repairHouse = (house: HousesType, reapired: boolean) => {
  house.repaired = reapired;
};

export function toFireStaff(stuff: GovernmentBuildings, value: number) {
  stuff.stuffCount -= value;
}

export const toHireStaff = (city: CityType, employe: number) => {
  city.governmentBuildings[0].stuffCount += employe;
};
