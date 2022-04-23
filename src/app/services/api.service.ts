import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postProduct(data : any){ //we will post our data here
    console.log(data);
    return this.http.post<any>("http://localhost:3000/ingredientList/", data)
  }
  getProduct(){ // get data
    return this.http.get<any>("http://localhost:3000/ingredientList/");
  }
  putIngredient(data:any, id : number){ //put=update. For dialog.comp.ts updateIngredient method
    return this.http.put<any>("http://localhost:3000/ingredientList/"+ id, data)
  }
  deleteIngredient(id:number){
    return this.http.delete<any>("http://localhost:3000/ingredientList/"+id);
  }
}
