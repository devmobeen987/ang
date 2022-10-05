import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateContractorsComponent } from './update-contractors.component';

describe('UpdateContractorsComponent', () => {
  let component: UpdateContractorsComponent;
  let fixture: ComponentFixture<UpdateContractorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateContractorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateContractorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
