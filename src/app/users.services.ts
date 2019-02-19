import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/observable/throw';
import { User } from './user';

@Injectable()
export class UserServices {

    readonly API_URL='http://jsonplaceholder.typicode.com/users';

    constructor(private http: HttpClient) { }

    getUser(id: number) {
        return this.http.get<User[]>(`${this.API_URL}/${id}`);
    }

    createUser(user: User){
        let data = JSON.stringify(user);

        return this.http.post(`${this.API_URL}`, data);
    }
}

