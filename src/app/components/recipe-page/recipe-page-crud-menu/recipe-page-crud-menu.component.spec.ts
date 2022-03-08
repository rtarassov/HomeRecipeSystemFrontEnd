import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipePageCrudMenuComponent } from './recipe-page-crud-menu.component';

describe('RecipePageCrudMenuComponent', () => {
  let component: RecipePageCrudMenuComponent;
  let fixture: ComponentFixture<RecipePageCrudMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipePageCrudMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipePageCrudMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
