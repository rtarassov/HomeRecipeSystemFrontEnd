import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { IngredientPageComponent } from './components/ingredient-page/ingredient-page.component';
import { IngredientCreateComponent } from './components/ingredient-page/ingredient-create/ingredient-create.component';
import { IngredientReadComponent } from './components/ingredient-page/ingredient-read/ingredient-read.component';
import { IngredientUpdateComponent } from './components/ingredient-page/ingredient-update/ingredient-update.component';
import { IngredientDeleteComponent } from './components/ingredient-page/ingredient-delete/ingredient-delete.component';
import { IngredientPageCrudMenuComponent } from './components/ingredient-page/ingredient-page-crud-menu/ingredient-page-crud-menu.component';
import { RecipePageComponent } from './components/recipe-page/recipe-page.component';
import { RecipePageCrudMenuComponent } from './components/recipe-page/recipe-page-crud-menu/recipe-page-crud-menu.component';
import { RecipeCreateComponent } from './components/recipe-page/recipe-create/recipe-create.component';
import { RecipeReadComponent } from './components/recipe-page/recipe-read/recipe-read.component';
import { RecipeUpdateComponent } from './components/recipe-page/recipe-update/recipe-update.component';
import { RecipeDeleteComponent } from './components/recipe-page/recipe-delete/recipe-delete.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    IngredientPageComponent,
    IngredientCreateComponent,
    IngredientReadComponent,
    IngredientUpdateComponent,
    IngredientDeleteComponent,
    IngredientPageCrudMenuComponent,
    RecipePageComponent,
    RecipePageCrudMenuComponent,
    RecipeCreateComponent,
    RecipeReadComponent,
    RecipeUpdateComponent,
    RecipeDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
