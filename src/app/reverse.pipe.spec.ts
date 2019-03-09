import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', ()=>{

    it('create an instance', ()=>{
        const pipe = new ReversePipe();
        expect(pipe).toBeTruthy();
    });

    it('should return nicolas in reverse', ()=>{
        const pipe = new ReversePipe();
        expect(pipe.transform("nicolas")).toEqual("salocin");
        expect(pipe.transform("ana")).toEqual("ana");
        expect(pipe.transform("zulema")).toEqual("ameluz");
        expect(pipe.transform("")).toEqual("");
        expect(pipe.transform(null)).toEqual("");
    });
});