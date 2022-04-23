import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from "../dialog/dialog.component";
import { ApiService } from "../services/api.service";
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})

export class IngredientComponent implements OnInit {
  title = 'Ingredients';
  displayedColumns: string[] = ['name', 'ingredientType', 'quantity', 'unit', 'freshness', 'comment', 'bestBefore', 'action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private dialog: MatDialog, private api : ApiService) {
  }

  ngOnInit(): void {
    this.getAllIngredients();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%' // +1 avaneva akna laius
    }).afterClosed().subscribe(val => { //val=value
      if(val ==='save'){ //save is coming from dialog.ts
        this.getAllIngredients()
      }
    })
  }
  getAllIngredients(){
    this.api.getProduct()
      .subscribe({
        next:(res)=>{
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort
        },
        error:(error)=>{
          alert("Error while fetching the Records")
        }
      })
  }

  editIngredient(row: any){
    this.dialog.open(DialogComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(val => {
      if(val === 'update'){  //update is coming from dialog.ts
        this.getAllIngredients()
      }
    })
  }
  deleteIngredient(id: number){
    this.api.deleteIngredient(id)
      .subscribe({
        next:(res)=>{
          alert("Ingredient deleted successfully");
          this.getAllIngredients()
        },
        error:()=>{
          alert("Error while deleting ingredient")
        }
      })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
