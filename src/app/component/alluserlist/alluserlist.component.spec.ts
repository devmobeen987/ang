import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlluserlistComponent } from './alluserlist.component';

describe('AlluserlistComponent', () => {
  let component: AlluserlistComponent;
  let fixture: ComponentFixture<AlluserlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlluserlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlluserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
