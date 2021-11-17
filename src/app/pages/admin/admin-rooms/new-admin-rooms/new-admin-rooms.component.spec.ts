import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdminRoomsComponent } from './new-admin-rooms.component';

describe('NewAdminRoomsComponent', () => {
  let component: NewAdminRoomsComponent;
  let fixture: ComponentFixture<NewAdminRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAdminRoomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAdminRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
