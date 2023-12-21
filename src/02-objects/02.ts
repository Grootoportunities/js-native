export type MeType = {
  name: string;
  age: number;
  isStudent: boolean;
  address: AddressType;
  skills: SkillsType[];
};
type AddressType = {
  city: string;
  country: string;
  house: number;
};
type SkillsType = {
  id: number;
  skill: string;
};

export type CityType = {
  title: string;
  houses: HousesType[];
  governmentBuildings: GovernmentBuildings[];
  citizenNumber: number;
};

export type HousesType = {
  id?: number;
  buildedAt: number;
  repaired: boolean;
  address: Address1Type;
};

type Address1Type = {
  number: number;
  street: { title: string };
};

export type GovernmentBuildings = {
  type: "HOSPITAL" | "FIRE-STATION";
  budget: number;
  stuffCount: number;
  address: Address2Type;
};

type Address2Type = {
  street: { title: string };
};

const me: MeType = {
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
