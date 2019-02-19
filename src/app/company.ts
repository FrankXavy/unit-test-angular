import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Company {

  constructor(
    public name?: string,
    public catchPhrase?: string,
    public bs?: string
  ){}
}


@Injectable({
    providedIn: 'root'
})
export class CompanyAdapter implements Adapter<Company> {

  adapt(item: any): Company {
    return new Company(
      item.name,
      item.catchPhrase,
      item.bs
    );
  }
}
