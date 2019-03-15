import { MyValidators } from './validators';
import {FormControl} from "@angular/forms";
describe('test for validators', ()=>{

  describe('test for skudalidate', ()=>{
    it('should return null in success for 1234', ()=>{
      let formControl = new FormControl();
      formControl.setValue('1234');
      let result = MyValidators.skuValidate(formControl);
      expect(result).toBeNull();
    });

    it('should return true in error for 54321', ()=>{
      let formControl = new FormControl();
      formControl.setValue('54321');
      let result = MyValidators.skuValidate(formControl);
      expect(result.invalidSku).toBeDefined();
      expect(result.invalidSku).toBeTruthy();
    });
  })
})
