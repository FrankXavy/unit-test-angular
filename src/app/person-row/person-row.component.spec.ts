import { ComponentFixture, TestBed, async} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PersonRowComponent } from './person-row.component';
import { Person } from './../person';

describe('test for PersonRowComponent', ()=>{

  let component : PersonRowComponent;
  let fixture: ComponentFixture<PersonRowComponent>;
  let debug: DebugElement;
  let element: HTMLElement;

  beforeEach(async(()=>{
    TestBed.configureTestingModule({
      declarations: [ PersonRowComponent ],
    })
    .compileComponents();
   }));

  beforeEach(()=>{
    fixture = TestBed.createComponent(PersonRowComponent);
    component = fixture.componentInstance;
    component.person = new Person(
      'nicolas',
      'molina',
      23,
      78,
      1.76
    );

  
    fixture.detectChanges();
  });

  it('should created', ()=>{
      expect(component).toBeTruthy();
  });

  it('should the name be nicolas', ()=>{
    expect(component.person.name).toEqual('nicolas');
  });

  it('should the age be 23', ()=>{
    expect(component.person.age).toEqual(23);
  });

  it('should the name be nicolas in the template', ()=>{
    debug = fixture.debugElement.query(By.css('h1'));
    element = debug.nativeElement;
    expect(element.textContent).toEqual('nicolas');
  });

  it('should the name be otro nombre when I change it', ()=>{
    debug = fixture.debugElement.query(By.css('h1'));
    element = debug.nativeElement;

    component.person.name='otro nombre';
    fixture.detectChanges();
    expect(element.textContent).toEqual('otro nombre');
  });

  it('should the age be 23 in the template',()=>{
    debug = fixture.debugElement.query(By.css('.person-age'));
    element = debug.nativeElement;

    expect(element.textContent).toEqual('23');
  });



});