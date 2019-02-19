import { Person } from './person';

describe('Test for Person', () => {

  let person;

//Arrange
  beforeEach(()=>{
    person = new Person(
      "nicolas",
      'molina',
      23,
      40,
      1.65
    );
  });



  describe('test for data', ()=>{
    it('set attributes', ()=>{
      expect(person.name).toEqual('nicolas');
      expect(person.lastname).toEqual('molina');
      expect(person.age).toEqual(23);
      expect(person.weight).toEqual(40);
      expect(person.height).toEqual(1.65);
    });
  });

  describe('test for CalcIMC', ()=>{
    it('should resturn a string: down', ()=>{
      person.weight = 40;
      expect(person.calcIMC()).toEqual('down');
    });

    it('should resturn a string: normal', ()=>{
      person.weight = 58;
      expect(person.calcIMC()).toEqual('normal');
    });

    it('should resturn a string: overweight', ()=>{
      person.weight = 68;
      expect(person.calcIMC()).toEqual('overweight');
    });

    it('should resturn a string: overweight level 1', ()=>{
      person.weight = 75;
       expect(person.calcIMC()).toEqual('overweight level 1');
    });

    it('should resturn a string: overweight level 2', ()=>{
      person.weight = 90;
      expect(person.calcIMC()).toEqual('overweight level 2');
    });

    it('should resturn a string: overweight level 3', ()=>{
      person.weight = 120;
      expect(person.calcIMC()).toEqual('overweight level 3');
    });

    it('should return a string: no found', ()=>{
      person.weight = -48;
      expect(person.calcIMC()).toEqual('no found');

      person.weight = -48;
      person.height = -1.70
      expect(person.calcIMC()).toEqual('no found');

    });

  });

});
