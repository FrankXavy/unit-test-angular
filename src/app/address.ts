import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Address {

  constructor(
    public street?: string,
    public suite?: string,
    public city?: string,
    public zipcode?: string
  ){}
}

@Injectable({
    providedIn: 'root'
})
export class AddressAdapter implements Adapter<Address> {

  adapt(item: any): Address {
    return new Address(
      item.street,
      item.suite,
      item.city,
      item.zipcode
    );
  }
}
