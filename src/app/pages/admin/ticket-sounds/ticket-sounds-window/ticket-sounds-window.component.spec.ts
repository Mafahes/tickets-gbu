import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketSoundsWindowComponent } from './ticket-sounds-window.component';

describe('TicketSoundsWindowComponent', () => {
  let component: TicketSoundsWindowComponent;
  let fixture: ComponentFixture<TicketSoundsWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketSoundsWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketSoundsWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
