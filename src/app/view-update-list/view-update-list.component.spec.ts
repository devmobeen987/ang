import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUpdateListComponent } from './view-update-list.component';

describe('ViewUpdateListComponent', () => {
  let component: ViewUpdateListComponent;
  let fixture: ComponentFixture<ViewUpdateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUpdateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUpdateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
