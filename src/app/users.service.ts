import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import { User, UserAdapter } from './user';

@Injectable()
export class UsersService {

path: string = 'http://jsonplaceholder.typicode.com/users';

  constructor(
    private http: HttpClient,
    private adapter: UserAdapter) { }

  getUser(id: number): Observable<User>{
    return this.http.get<User>(`${this.path}/${id}`,
    this.makeOptions()
    )
    .pipe(map((data: User)=> this.adapter.adapt(data)));
  }

  createUser(user: User): Observable<User>{
    let data = JSON.stringify(user);
    return this.http.post<User>(`${this.path}`, data)
    .pipe(map((data: any)=> this.adapter.adapt(data)));
  }

  updateUser(user: User): Observable<User>{
    let id = user.id;
    let data = JSON.stringify(user);
    return this.http.put<User>(`${this.path}/${id}`, data)
    .pipe(map((data: any)=> this.adapter.adapt(data)));
  }

  deleteUser(user: User): Observable<any>{
    let id = user.id;
    return this.http.delete(`${this.path}/${id}`)
  }

  makeOptions(){
    return {
                 headers: new HttpHeaders().set('API-TOKEN', '123')
               }
  }
}
