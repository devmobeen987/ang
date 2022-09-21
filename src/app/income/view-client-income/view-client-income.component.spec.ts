import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClientIncomeComponent } from './view-client-income.component';

describe('ViewClientIncomeComponent', () => {
  let component: ViewClientIncomeComponent;
  let fixture: ComponentFixture<ViewClientIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewClientIncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClientIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
