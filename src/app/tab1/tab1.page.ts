import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  currentRecipeIndex: number = 0; // Start at the first recipe
  saved: { name: string; subtitle: string; img: string; description: string; }[] = [];
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

  // Bookmark the current recipe and move to the next one
  bookmarkRecipe() {
    // Here, you'd typically add a bookmark action, such as saving to a database or local storage
    const existingRecipe = this.saved.find(recipe => recipe.name === this.recipes[this.currentRecipeIndex].name);

  if (existingRecipe) {
    console.log('Recipe already saved');
  } else {
    // Add the current recipe to the saved array
    this.saved.push(this.recipes[this.currentRecipeIndex]);
    console.log('Bookmarked:', this.recipes[this.currentRecipeIndex].name);
  }
    this.nextRecipe();
  }

  // Skip the current recipe and move to the next one
  skipRecipe() {
    this.nextRecipe();
  }
}
