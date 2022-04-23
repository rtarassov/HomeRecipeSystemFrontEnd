import {Component, Inject, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ApiService} from "../services/api.service";
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  freshnessList = ["Use NOW", "Few days to go", "No rush"]
  ingredientForm !: FormGroup
  actionBtn : string = "Save" //action button with name "saved" for (for button dialog.com.htm)
  constructor(private formBuilder: FormBuilder, private api: ApiService,
              @Inject(MAT_DIALOG_DATA) public editData: any, //editData will have a row value from dialog edit method
              private dialogRef: MatDialogRef<DialogComponent>) {
  }

  ngOnInit(): void { //initialised our form
    this.ingredientForm = this.formBuilder.group({
      name: ['', Validators.required],
      ingredientType: ['', Validators.required],
      quantity: ['', Validators.required],
      unit: ['', Validators.required],
      freshness: ['', Validators.required],
      comment: ['', Validators.required],
      bestBefore: ['', Validators.required]
    })

    if (this.editData) {
      this.actionBtn = "Update"; //Will change "save" button to update if I try to edit ingredient
      this.ingredientForm.controls['name'].setValue(this.editData.name);
      this.ingredientForm.controls['ingredientType'].setValue(this.editData.ingredientType);
      this.ingredientForm.controls['quantity'].setValue(this.editData.quantity);
      this.ingredientForm.controls['unit'].setValue(this.editData.unit);
      this.ingredientForm.controls['freshness'].setValue(this.editData.freshness);
      this.ingredientForm.controls['comment'].setValue(this.editData.comment);
      this.ingredientForm.controls['bestBefore'].setValue(this.editData.bestBefore);
      this.ingredientForm.controls['name'].setValue(this.editData.name);
    }

  }

  addIngredient() {
    if(!this.editData){ //if it's not edit data, then add our data
      if (this.ingredientForm.valid) {
        this.api.postProduct(this.ingredientForm.value)
          .subscribe({
            next: (res) => {
              console.log(res);
              alert("Ingredient added successfully");
              this.ingredientForm.reset()
              this.dialogRef.close('save'); //form will be closed after adding
            },
            error: (err) => {
              console.log(err);
              alert("Error while adding the ingredient")
            }
          })
      }
    } else {
      this.updateIngredient()
    }
  }
  updateIngredient(){
      this.api.putIngredient(this.ingredientForm.value, this.editData.id) //first you need to create api
        .subscribe({
          next:(res)=>{
            alert("Ingredient updated successfully");
            this.ingredientForm.reset();
            this.dialogRef.close('update');
          },
          error:()=>{
            alert("Error while updating the record!");
          }
        })
  }
}
