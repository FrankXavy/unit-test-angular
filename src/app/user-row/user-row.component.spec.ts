import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserRowComponent } from './user-row.component';

describe('Test from UserRowComponent', () => {
  let component: UserRowComponent;
  let fixture: ComponentFixture<UserRowComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should the name be 'nicolas''", ()=>{
    expect(component.name).toEqual('nicolas');
  });

  it("should the age be '23''", ()=>{
      expect(component.age).toEqual(23);
  });

  it("should the name be 'nicolas' in template", ()=>{
      let de = fixture.debugElement.query(By.css('h1'));
      let element = de.nativeElement;
       expect(element.textContent).toEqual('nicolas');
    });
});
