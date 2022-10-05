import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContractorsComponent } from './add-contractors.component';

describe('AddContractorsComponent', () => {
  let component: AddContractorsComponent;
  let fixture: ComponentFixture<AddContractorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContractorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContractorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
