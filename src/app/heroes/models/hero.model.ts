/**
 *  Always use interfaces when you want to describe the shape of your object
 *  Add these interfaces to the models' folder of your feature (ex: heroes/models)
 */
export interface Hero {
  id: number;
  name: string;
  city: string;
  website: string;
}
