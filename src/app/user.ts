import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

import { Address, AddressAdapter } from './address';
import { Company, CompanyAdapter } from './company';

export class User {

  constructor(
    public id?: number,
    public name?: string,
    public username?: string,
    public email?: string,
    public address?: Address,
    public phone?: string,
    public website?: string,
    public company?: Company
  ){};
}
//private adapter: UserAdapter

@Injectable({
    providedIn: 'root'
})
export class UserAdapter implements Adapter<User> {

  constructor(
    private addressAdapter: AddressAdapter,
    private companyAdapter: CompanyAdapter
  ){}

  adapt(item: any): User {
    return new User(
      item.id,
      item.name,
      item.username,
      item.email,
      this.addressAdapter.adapt(item.address),
      item.phone,
      item.website,
      this.companyAdapter.adapt(item.company)
    );
  }
}
