export interface Character {
  isAlive: boolean;
  message: string;
  name: string;
  family: string;
  age: number;
  category: string;
  weapon?: string;
  skillLevel?: number;
  reignYears?: number;
  adviseTo?: {
      isAlive: boolean
      message: string,
      name: string,
      family:string,
      age: number,
      weapon: string,
      skillLevel: number,
}}
