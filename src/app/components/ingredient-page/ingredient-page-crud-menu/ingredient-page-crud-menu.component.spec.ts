import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientPageCrudMenuComponent } from './ingredient-page-crud-menu.component';

describe('IngredientPageCrudMenuComponent', () => {
  let component: IngredientPageCrudMenuComponent;
  let fixture: ComponentFixture<IngredientPageCrudMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientPageCrudMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientPageCrudMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
