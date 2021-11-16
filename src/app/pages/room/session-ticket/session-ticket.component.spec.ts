import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionTicketComponent } from './session-ticket.component';

describe('SessionTicketComponent', () => {
  let component: SessionTicketComponent;
  let fixture: ComponentFixture<SessionTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
