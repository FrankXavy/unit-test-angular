import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserListComponent } from './user-list.component';
import { UserRowComponent } from './../user-row/user-row.component';
import { UsersService } from './../users.service';
import { MockUsersServie } from './../users.service.mock';


describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent , UserRowComponent],
      providers: [
        {provide: UsersService, useClass: MockUsersServie}
        
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log(component.users);
    expect(component).toBeTruthy();
  });

  it('should be lenght equals 3', () =>{
    expect(component.users.length).toEqual(3);
  });

  it('should selectedUser be first item of the array', () => {
    expect(component.selectedUser.name).toEqual('Leanne Graham');
  });

  it('should have an user-row', ()=>{
    let de = fixture.debugElement.query(By.css('app-user-row'));
    expect(de).toBeTruthy();
  });

  it('should raise selected event when clicked', ()=>{
    let button = fixture.debugElement.query(By.css('app-user-row .btn-selected'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.selectedUser.name).toBe('Leanne Graham');
  });
});
