import {
  FoodType,
  TransportType,
  StreamingType,
  ElectricityType,
  PurchaseType,
  FashionType,
  MealType,
} from "carbon-footprint";

enum FoodsType {
  food = "food",
  transport = "transport",
  purchase = "purchase",
  streaming = "streaming",
  electricity = "electricity",
  fashion = "fashion",
  meal = "meal",
  productScanned = "productScanned",
  custom = "custom",
}

type EmissionModelType =
  | FoodType
  | TransportType
  | StreamingType
  | ElectricityType
  | PurchaseType
  | FashionType
  | MealType
  | "productScanned"
  | "custom";

interface EmissionPayload {
  name?: string;
  foodType: FoodsType;
  foodModelType: EmissionModelType;
  value: number;
  creationDate: string;
  location?: ElectricityType;
}

interface Emission extends EmissionPayload {
  id: string;
  isMitigated: boolean;
}

export { Emission, EmissionPayload, FoodsType, EmissionModelType };
