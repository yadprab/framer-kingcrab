export interface IStateNav {
  state: {
    isOpen: boolean;
  };
}

export interface IStateMenu {
  state: {
    nonVeg: boolean;
    veg: boolean;
  };
}
export interface navStateM {
  inter: {
    Food: IStateMenu["state"];
    setFood: React.Dispatch<React.SetStateAction<IStateMenu["state"]>>;
  };
}

export interface IDish {
  state: {
    varieties: string;
    menu: {
      dish: string;
      price: string;
    }[];
  }[];
}

export interface IContent {
  state: {
    foodType: string;
    foods: IDish["state"];
  }[];
}

export type ACTIONTYPES =
  | { type: string; payload: string }
  | { type: string; payload: string }
  | { type: string; payload: string }
  | { type: string; payload: string };

export interface IReducer {
  state: {
    [propertyName: string]: boolean;
  };
}
