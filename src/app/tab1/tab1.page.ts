import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  saved: { name: string; subtitle: string; img: string; description: string; }[] = [];
  constructor(private recipeService: RecipeService) {
  }
  currentRecipeIndex: number = 0; // Start at the first recipe
  recipes = [
    {
      name: 'Spaghetti Bolognese',
      subtitle: 'Time taken: 30min',
      img: 'https://ionicframework.com/docs/img/demos/card-media.png',
      description: 'A classic Italian pasta dish with a rich tomato sauce.',
    },
    {
      name: 'Grilled Chicken',
      subtitle: 'Time taken: 25min',
      img: 'https://ionicframework.com/docs/img/demos/card-media.png',
      description: 'Juicy grilled chicken with herbs and spices.',
    },
    {
      name: 'Vegetable Stir Fry',
      subtitle: 'Time taken: 20min',
      img: 'https://ionicframework.com/docs/img/demos/card-media.png',
      description: 'A healthy mix of fresh vegetables.',
    },
  ];

  // Move to the next recipe in the list
  nextRecipe() {
    this.currentRecipeIndex = (this.currentRecipeIndex + 1) % this.recipes.length;
  }

  bookmarkRecipe() {
    const currentRecipe = this.recipes[this.currentRecipeIndex];
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
}
