import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonPostponeComponent } from './reason-postpone.component';

describe('ReasonPostponeComponent', () => {
  let component: ReasonPostponeComponent;
  let fixture: ComponentFixture<ReasonPostponeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReasonPostponeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasonPostponeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
