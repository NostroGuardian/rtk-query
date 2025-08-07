export interface IAllRecipesDto {
  recipes: IRecipe[];
  total: number;
  skip: number;
  limit: number;
}

export interface IRecipe {
  id: number;
  name: string;
  image: string;
}
