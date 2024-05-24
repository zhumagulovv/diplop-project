interface Features {
  display: string;
  safety_system: string;
  comfort: string;
  interior: string;
}

interface TestResults {
  safety: string;
  reliability: string;
  fuel_efficiency: string;
  driving_experience: string;
}

export interface Models {
  id: number;
  model: string;
  image: string;
  year: string;
  color: string;
  body_type: string;
  engine: string;
  power: string;
  transmission: string;
  drive: string;
  price: string;
  features: Features;
  test_results: TestResults;
}

export interface Car {
  id: number;
  model: string;
  image: string;
  year: string;
  color: string;
  body_type: string;
  engine: string;
  power: string;
  transmission: string;
  drive: string;
  price: string;
  features: Features;
  test_results: TestResults;
}

export type ItemType = Models & Car;
