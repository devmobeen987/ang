import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAddIncomeComponent } from './child-add-income.component';

describe('ChildAddIncomeComponent', () => {
  let component: ChildAddIncomeComponent;
  let fixture: ComponentFixture<ChildAddIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildAddIncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildAddIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
