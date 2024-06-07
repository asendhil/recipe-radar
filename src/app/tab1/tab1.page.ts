import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { recipes } from 'src/assets/data/recipes';
import { pantryItems } from 'src/assets/data/recipes';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  recipes = recipes;
  filteredRecipes = [];
  saved: { name: string; subtitle: string; img: string; description: string; ingredients: string[], nutrition: string[], directions: string[], expanded: boolean }[] = [];
  
  constructor(private recipeService: RecipeService) {}

  currentRecipeIndex: number = Math.round(Math.random()*10); // Start at the first recipe

  // Move to the next recipe in the list
  nextRecipe() {
    this.currentRecipeIndex = (this.currentRecipeIndex + 1) % recipes.length;
  }

  bookmarkRecipe() {
    const currentRecipe = recipes[this.currentRecipeIndex];
    const isAlreadySaved = this.recipeService.savedRecipes.some(recipe => recipe.name === currentRecipe.name);
    if (!isAlreadySaved) {
      this.recipeService.savedRecipes.push(currentRecipe);
      console.log('Bookmarked:', currentRecipe.name);
    } else {
      console.log('Recipe already saved');
    }
    this.nextRecipe();
  }

  skipRecipe() {
    this.nextRecipe();
  }

  ngOnInit() {
    this.recipeService.getRecipe().subscribe(res => {
      console.log(res);
    });
  }
}
