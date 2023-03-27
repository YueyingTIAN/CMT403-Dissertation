export enum GuideCategory {
  breakfast = "Break\n  fast",
  morningtea = "Morning\n    tea",
  lunch = "Lunch",
  afternoontea = "Afternoon\n      tea",
  supper = "Supper",
  eveningsnack = "Evening\n  snack",
}

export interface Guide {
  title: string;
  category: GuideCategory;
  body: string;
  key: string;
}
