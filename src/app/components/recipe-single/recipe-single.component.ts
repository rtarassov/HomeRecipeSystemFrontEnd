import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../../services/recipe-service/recipe.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipe-single',
  templateUrl: './recipe-single.component.html',
  styleUrls: ['./recipe-single.component.css']
})
export class RecipeSingleComponent implements OnInit {
  public recipe: any;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const recipeId = params['id']

      this.recipeService
        .getRecipe(recipeId)
        .subscribe(recipe => this.recipe = recipe);


    });


  }



}
