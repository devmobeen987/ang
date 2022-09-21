import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExpanseComponent } from './view-expanse.component';

describe('ViewExpanseComponent', () => {
  let component: ViewExpanseComponent;
  let fixture: ComponentFixture<ViewExpanseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewExpanseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExpanseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
