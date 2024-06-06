import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { recipes } from 'src/assets/data/recipes';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  recipes = recipes;
  constructor(public recipeService: RecipeService) {}

  toggleExpand(recipe) {
    recipe.expanded = !recipe.expanded;
  }

}
