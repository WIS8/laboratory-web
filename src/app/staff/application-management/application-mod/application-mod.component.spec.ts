import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationModComponent } from './application-mod.component';

describe('ApplicationModComponent', () => {
  let component: ApplicationModComponent;
  let fixture: ComponentFixture<ApplicationModComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationModComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
