import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonRedirectComponent } from './reason-redirect.component';

describe('ReasonRedirectComponent', () => {
  let component: ReasonRedirectComponent;
  let fixture: ComponentFixture<ReasonRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReasonRedirectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasonRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
