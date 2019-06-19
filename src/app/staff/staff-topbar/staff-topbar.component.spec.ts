import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffTopbarComponent } from './staff-topbar.component';

describe('StaffTopbarComponent', () => {
  let component: StaffTopbarComponent;
  let fixture: ComponentFixture<StaffTopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffTopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
