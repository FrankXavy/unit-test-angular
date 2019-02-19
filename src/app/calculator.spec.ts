import { Calculator } from './calculator';

describe('Test for Calculator', () => {

  let calculator;

  beforeEach(()=>{
     //Arrange preparar
      calculator = new Calculator();
  });

  it('should create an instance', () => {
    expect(new Calculator()).toBeTruthy();
  });


  describe('test for multiply', ()=>{

    it("should return nine", ()=>{
      //Act actuar
      let result = calculator.multiply(3,3);

      //Assert Verificar
      expect(result).toEqual(9);
    });

    it("should return four", ()=>{
        //Act actuar
          let result = calculator.multiply(1,4);

          //Assert Verificar
          expect(result).toEqual(4);
     });
  });

  describe('Test for divide', ()=>{

    it('divide for a number', ()=>{
      expect(calculator.divide(6,3)).toBe(2);
      expect(calculator.divide(5,2)).toBe(2.5);
      expect(calculator.divide(5,2)).not.toBeNull();
    });

    it('divide for zero', ()=>{
      expect(calculator.divide(6,0)).toBeNull();
    });
  });

  it('test of matchers', ()=>{
    let name = 'nicolas';
    let name2;

    expect(name).toBeDefined();
    expect(name2).toBeUndefined();

    expect(1+2 == 3).toBeTruthy();
    expect(1+1 == 3).toBeFalsy();

    expect(5).toBeLessThan(10);
    expect(20).toBeGreaterThan(10);

    expect('1234567').toMatch(/123/);
    expect(["apples", "oranges", "pears"]).toContain("oranges");
  });
});
