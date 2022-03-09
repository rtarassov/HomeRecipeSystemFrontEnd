import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css']
})
export class RecipePageComponent implements OnInit {

  public recipes: any[] | undefined;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes() {
    this.httpClient.get<any>('http://localhost:8080/recipe/read-all')
      .subscribe(
      response => {
        console.log(response);
        this.recipes = response;
      }
    );
  }

}
