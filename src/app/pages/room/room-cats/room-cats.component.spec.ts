import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCatsComponent } from './room-cats.component';

describe('RoomCatsComponent', () => {
  let component: RoomCatsComponent;
  let fixture: ComponentFixture<RoomCatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomCatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
