import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomSubdivisionsComponent } from './room-subdivisions.component';

describe('RoomSubdivisionsComponent', () => {
  let component: RoomSubdivisionsComponent;
  let fixture: ComponentFixture<RoomSubdivisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomSubdivisionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomSubdivisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
