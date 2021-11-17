import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonOverComponent } from './reason-over.component';

describe('ReasonOverComponent', () => {
  let component: ReasonOverComponent;
  let fixture: ComponentFixture<ReasonOverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReasonOverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasonOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
