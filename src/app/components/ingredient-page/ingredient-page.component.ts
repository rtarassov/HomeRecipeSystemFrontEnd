import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-ingredient-page',
  templateUrl: './ingredient-page.component.html',
  styleUrls: ['./ingredient-page.component.css']
})
export class IngredientPageComponent implements OnInit {

  public ingredients: any[] | undefined;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getIngredients();
  }

  getIngredients() {
    this.httpClient.get<any>('http://localhost:8080/ingredient/read-all')
      .subscribe(
        response => {
          console.log(response);
          this.ingredients = response;
        }
      );
  }

}
