import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeDashbordComponent } from './income-dashbord.component';

describe('IncomeDashbordComponent', () => {
  let component: IncomeDashbordComponent;
  let fixture: ComponentFixture<IncomeDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeDashbordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
