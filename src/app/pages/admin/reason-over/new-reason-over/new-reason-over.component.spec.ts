import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReasonOverComponent } from './new-reason-over.component';

describe('NewReasonOverComponent', () => {
  let component: NewReasonOverComponent;
  let fixture: ComponentFixture<NewReasonOverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReasonOverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReasonOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
