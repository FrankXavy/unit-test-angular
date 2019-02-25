import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserListComponent } from './user-list.component';
import { UserRowComponent } from './../user-row/user-row.component';


describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent , UserRowComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an user-row', ()=>{
    let de = fixture.debugElement.query(By.css('app-user-row'));
    expect(de).toBeTruthy();
  });

  it('should raise selected event when clicked', ()=>{
    let button = fixture.debugElement.query(By.css('app-user-row .btn-selected'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.selectedUser.name).toBe('valentina');
  });
});
