import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketSoundsComponent } from './ticket-sounds.component';

describe('TicketSoundsComponent', () => {
  let component: TicketSoundsComponent;
  let fixture: ComponentFixture<TicketSoundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketSoundsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketSoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
