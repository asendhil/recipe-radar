// shared/recipe.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  savedRecipes: { name: string; subtitle: string; img: string; description: string; }[] = [];
  constructor() { }
}
