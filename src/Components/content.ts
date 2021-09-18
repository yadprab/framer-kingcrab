import { NonVegData, VegData } from "./maindata";

export const content = [
  {
    foodType: "Non Vegetarian",
    foods: [...NonVegData],
  },
  {
    foodType: "Vegetarian",
    foods: [...VegData],
  },
];
