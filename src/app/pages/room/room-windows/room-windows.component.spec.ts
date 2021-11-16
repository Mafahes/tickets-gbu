import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomWindowsComponent } from './room-windows.component';

describe('RoomWindowsComponent', () => {
  let component: RoomWindowsComponent;
  let fixture: ComponentFixture<RoomWindowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomWindowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
