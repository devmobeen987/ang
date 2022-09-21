import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditButtonComponent } from './add-edit-button.component';

describe('AddEditButtonComponent', () => {
  let component: AddEditButtonComponent;
  let fixture: ComponentFixture<AddEditButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
