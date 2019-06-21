import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisuseApplicationManagementComponent } from './disuse-application-management.component';

describe('DisuseApplicationManagementComponent', () => {
  let component: DisuseApplicationManagementComponent;
  let fixture: ComponentFixture<DisuseApplicationManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisuseApplicationManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisuseApplicationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
