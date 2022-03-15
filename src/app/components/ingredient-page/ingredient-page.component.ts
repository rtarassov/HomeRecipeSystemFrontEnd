import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-ingredient-page',
  templateUrl: './ingredient-page.component.html',
  styleUrls: ['./ingredient-page.component.css']
})
export class IngredientPageComponent implements OnInit {

  public ingredients: any[] | undefined;
  // icons
  faPencil = faPencil;
  faTrash = faTrash;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    console.log("Getting ingredients from server")
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
