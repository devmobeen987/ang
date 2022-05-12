import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingalUpdateDataComponent } from './singal-update-data.component';

describe('SingalUpdateDataComponent', () => {
  let component: SingalUpdateDataComponent;
  let fixture: ComponentFixture<SingalUpdateDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingalUpdateDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingalUpdateDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
