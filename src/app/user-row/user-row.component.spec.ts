import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { User } from './../user';

import { UserRowComponent } from './user-row.component';

describe('Test from UserRowComponent', () => {
  let component: UserRowComponent;
  let fixture: ComponentFixture<UserRowComponent>;
  let debug: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRowComponent);
    component = fixture.componentInstance;
    component.user = new User(0,'nicolas', '', 'ni@g.com', null, '123-456');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should the user name be nicolas', ()=>{
    expect(component.user.name).toEqual('nicolas');
  });

  it('should the user phoe be 123-456', ()=>{
    expect(component.user.phone).toEqual('123-456');
  });

  it('should the user name in template be nicolas',()=>{
    debug = fixture.debugElement.query(By.css('h5'));
    element = debug.nativeElement;

    expect(element.textContent).toEqual('nicolas');
  });

  it('should the user name in template be andrea',()=>{
    debug = fixture.debugElement.query(By.css('h5'));
    element = debug.nativeElement;
    component.user.name = 'andrea';
    fixture.detectChanges();
    expect(element.textContent).toEqual('andrea');
  });


  it('should show the email when  clicked a button',()=>{
    debug = fixture.debugElement.query(By.css('.btn-show-email'));

    let de = fixture.debugElement.query(By.css('.user-email'));
    let el = de.nativeElement;
    debug.triggerEventHandler('click', null);

    fixture.detectChanges();
    expect(el.textContent).toEqual('ni@g.com');
  });

it('sholud raise selected event when clicked', ()=>{
  let selectedUser: User;

  component.onSelected.subscribe((user: User) => {
    selectedUser = user;
  });

  let button = fixture.debugElement.query(By.css('.btn-selected'));
  button.triggerEventHandler('click', null);

  fixture.detectChanges();

  expect(selectedUser.name).toEqual('nicolas');
});


});
