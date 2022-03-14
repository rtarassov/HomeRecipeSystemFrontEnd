import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  url = 'http://localhost:8080/recipe/find-by-id'
  constructor(private http: HttpClient) { }

  // Get a single recipe by id
  getRecipe(recipeId: number) {
    return this.http
      .get(`${this.url}/${recipeId}`);
  }
}
