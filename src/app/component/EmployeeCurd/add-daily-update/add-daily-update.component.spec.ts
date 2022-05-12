import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDailyUpdateComponent } from './add-daily-update.component';

describe('AddDailyUpdateComponent', () => {
  let component: AddDailyUpdateComponent;
  let fixture: ComponentFixture<AddDailyUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDailyUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDailyUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
