import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelManagementComponent } from './model-management.component';

describe('ModelManagementComponent', () => {
  let component: ModelManagementComponent;
  let fixture: ComponentFixture<ModelManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
