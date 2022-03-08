import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {IngredientPageComponent} from "./components/ingredient-page/ingredient-page.component";
import {IngredientCreateComponent} from "./components/ingredient-page/ingredient-create/ingredient-create.component";
import {IngredientReadComponent} from "./components/ingredient-page/ingredient-read/ingredient-read.component";
import {IngredientUpdateComponent} from "./components/ingredient-page/ingredient-update/ingredient-update.component";
import {IngredientDeleteComponent} from "./components/ingredient-page/ingredient-delete/ingredient-delete.component";
import {RecipePageComponent} from "./components/recipe-page/recipe-page.component";
import {RecipeCreateComponent} from "./components/recipe-page/recipe-create/recipe-create.component";
import {RecipeReadComponent} from "./components/recipe-page/recipe-read/recipe-read.component";
import {RecipeUpdateComponent} from "./components/recipe-page/recipe-update/recipe-update.component";
import {RecipeDeleteComponent} from "./components/recipe-page/recipe-delete/recipe-delete.component";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: RecipePageComponent
  },
  {
    path: 'ingredients',
    component: IngredientPageComponent
  },
  {
    path: 'create-ingredient',
    component: IngredientCreateComponent
  },
  {
    path: 'read-ingredient',
    component: IngredientReadComponent
  },
  {
    path: 'update-ingredient',
    component: IngredientUpdateComponent
  },
  {
    path: 'delete-ingredient',
    component: IngredientDeleteComponent
  },
  {
    path: 'create-recipe',
    component: RecipeCreateComponent
  },
  {
    path: 'read-recipe',
    component: RecipeReadComponent
  },
  {
    path: 'update-recipe',
    component: RecipeUpdateComponent
  },
  {
    path: 'delete-recipe',
    component: RecipeDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
