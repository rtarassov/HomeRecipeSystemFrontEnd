import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientReadComponent } from './ingredient-read.component';

describe('IngredientReadComponent', () => {
  let component: IngredientReadComponent;
  let fixture: ComponentFixture<IngredientReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
