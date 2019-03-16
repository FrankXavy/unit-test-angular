import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSkuComponent } from './form-sku.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";

describe('FormSkuComponent', () => {
  let component: FormSkuComponent;
  let fixture: ComponentFixture<FormSkuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports :[
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ FormSkuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be skuform created', ()=>{
    expect(component.skuForm).toBeTruthy();
  });

  it('should be skuform have skuField', ()=>{
    expect(component.skuField).toBeTruthy();
  });

  it('should be skuform have skuNameField', ()=>{
    expect(component.skuNameField).toBeTruthy();
  });

  describe('test for skuField', ()=>{

    it('should have an error: invalidSku', ()=>{
      component.skuField.setValue('kdshfkjdhf');
      expect(component.skuField.invalid).toBeTruthy();
      expect(component.skuField.getError('invalidSku')).toBeTruthy()
    });

    it('should have not an error: invalidSku', ()=>{
      component.skuField.setValue('123kdshfkjdhf');
      expect(component.skuField.valid).toBeTruthy();
    });

    it('should have an error: required', ()=>{
      component.skuField.setValue('');
      expect(component.skuField.invalid).toBeTruthy();
      expect(component.skuField.getError('required')).toBeTruthy()
    });

  });

  describe('tet for events in template html', ()=>{

    it('should show an error in template: invalidSku', async(()=>{
      let input = fixture.debugElement.query(By.css('input#skuInput')).nativeElement;
      input.value = 'asas';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      fixture.whenStable()
        .then(()=>{
          let debug: HTMLElement = fixture.nativeElement;
          let elements = debug.querySelectorAll('.ui.message');
          console.log(elements);
          expect(elements.length).toEqual(1);
          expect(elements[0].innerHTML.trim()).toEqual('SKU is invalid');
        })

    }));

    it('should show an error in template: required', async(()=>{
      let input = fixture.debugElement.query(By.css('input#skuInput')).nativeElement;
      input.value = '';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      fixture.whenStable()
        .then(()=>{
          let debug: HTMLElement = fixture.nativeElement;
          let elements = debug.querySelectorAll('.ui.message');
          console.log(elements);
          expect(elements.length).toEqual(1);
          expect(elements[0].innerHTML.trim()).toEqual('SKU is required');
        })

    }));

  })

});
