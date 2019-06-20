import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderTopbarComponent } from './leader-topbar.component';

describe('LeaderTopbarComponent', () => {
  let component: LeaderTopbarComponent;
  let fixture: ComponentFixture<LeaderTopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderTopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
