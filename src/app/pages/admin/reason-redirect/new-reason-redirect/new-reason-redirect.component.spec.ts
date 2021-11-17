import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReasonRedirectComponent } from './new-reason-redirect.component';

describe('NewReasonRedirectComponent', () => {
  let component: NewReasonRedirectComponent;
  let fixture: ComponentFixture<NewReasonRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReasonRedirectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReasonRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
