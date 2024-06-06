// shared/recipe.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  savedRecipes: { name: string; subtitle: string; img: string; description: string; expnaded: boolean; }[] = [];
  constructor(private http: HttpClient) { }

  getRecipe(): Observable<any> { //always ensure recipe has instructions & include nutrition facts
    return this.http.get(`${environment.baseURL}?apiKey=${environment.apiKey}&instructionsRequired=true&addRecipeNutrition=true`);
  }

  getName() {}

  getSubtitle() {}

  getImage() {}

  getDescription() {}

  getIngredients() {}

  getInstructions() {}

}
