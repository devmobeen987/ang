import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExpanseComponent } from './edit-expanse.component';

describe('EditExpanseComponent', () => {
  let component: EditExpanseComponent;
  let fixture: ComponentFixture<EditExpanseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExpanseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExpanseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
