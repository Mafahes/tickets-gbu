import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReasonPostponeComponent } from './new-reason-postpone.component';

describe('NewReasonPostponeComponent', () => {
  let component: NewReasonPostponeComponent;
  let fixture: ComponentFixture<NewReasonPostponeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReasonPostponeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReasonPostponeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
