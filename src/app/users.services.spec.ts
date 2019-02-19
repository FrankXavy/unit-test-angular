import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserServices } from './users.services';
import { User } from './user';

describe('Test for UserServices', () => {
    let injector: TestBed;
    let service: UserServices;
    let httpMock: HttpTestingController;

    const dummyUsers = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
              "street": "Kulas Light",
              "suite": "Apt. 556",
              "city": "Gwenborough",
              "zipcode": "92998-3874",
              "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
              }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
              "name": "Romaguera-Crona",
              "catchPhrase": "Multi-layered client-server neural-net",
              "bs": "harness real-time e-markets"
            }
          }
      ];

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [UserServices]
      });
      injector = getTestBed();
      service = injector.get(UserServices);
      httpMock = injector.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });


    describe('Test for getUser', () => {
        it('should return an Observable<User[]>', () => {
            service.getUser(1).subscribe(users => {
                expect(users.length).toBe(1);
                expect(users).toEqual(dummyUsers);
                let user: User = users[0];
                expect(user.name).toEqual('Leanne Graham');
                expect(req.request.url).toBe('http://jsonplaceholder.typicode.com/users/1');
            });
      
          const req = httpMock.expectOne(`${service.API_URL}/1`);
          expect(req.request.method).toBe("GET");
          req.flush(dummyUsers);
        });

        it('Tetst for User 1', ()=>{
            service.getUser(1).subscribe(users => {
                expect(users.length).toBe(1);
                expect(users).toEqual(dummyUsers);
                let user: User = users[0];
                expect(user.name).toEqual('Leanne Graham');
                expect(user.email).toEqual('Sincere@april.biz');
                expect(user.address).toBeDefined();
            });

            const req = httpMock.expectOne(`${service.API_URL}/1`);
            expect(req.request.method).toBe("GET");
            req.flush(dummyUsers);

        });
      });

      //error
      describe('error in getUser', () => {
         
        it('shoud return an error', () => {
          service.getUser(1)
            .subscribe( success => {
              
            }, error =>{
              expect(error).toBeDefined();
              
            });
      
            const req = httpMock.expectOne(`${service.API_URL}/1`);
            expect(req.request.method).toBe("GET");
            req.error(new ErrorEvent('error'));
        });
      });

      describe('test for createUser' ,()=>{
        it("should return a new user", ()=> {
          //arrange
          let dataResponse:any;
          let dataError;
          let userMock = "{'id':1}";
            
           
          let newUser: User = { 
            id: 0,
            name : "Leane Graham",
            email : "Sincere@april.biz",
            phone : "1-770-736-8031 x56442",
            website: '',
            address: {},
            company: {}
          };
          service.createUser(newUser).subscribe(
            response => {
              expect(response).toBeDefined();
              dataResponse = response;
              expect(dataResponse).toBeDefined();
              let newUserCreated: User = JSON.parse(dataResponse);
            },
            error => {
              dataError = error;
            }
          );
          //expect(dataResponse).toBeDefined();
          //let newUserCreated: User = JSON.parse(dataResponse);
          //expect(dataError).toBeUndefined();
          //expect(newUserCreated.id).toBeDefined();
          //expect(newUserCreated.name).toEqual('Leane Graham');
          //expect(newUserCreated.email).toEqual('Sincere@april.biz');
          //expect(newUserCreated.phone).toEqual('1-770-736-8031 x56442');

          const req = httpMock.expectOne(`${service.API_URL}`);
          expect(req.request.method).toBe("POST");
          //expect(req.request.url).toBe('http://jsonplaceholder.typicode.com/users');
          req.flush(userMock);
        });

        it("should return an error when a new user is created", ()=> {
          //arrange
          let dataResponse, dataError;
          let userMock = {
            "id": "1",
            "name": "Leane Graham",
            "phone": "1-770-736-8031 x56442",
            "email": "Sincere@april.biz"
          }
          
          let newUser: User; 
          newUser.name = "Leane Graham";
          newUser.email = "Sincere@april.biz";
          newUser.phone = "1-770-736-8031 x56442";
          service.createUser(newUser).subscribe(
            response => {
              dataResponse = response;
            },
            error => {
              dataError = error;
            }
          );

          expect(dataError).toBeDefined();
          expect(dataResponse).toBeUndefined();
         
          const req = httpMock.expectOne(`${service.API_URL}/1`);
          expect(req.request.method).toBe("POST");
          expect(req.request.url).toBe('http://jsonplaceholder.typicode.com/users');
          req.error(new ErrorEvent('error'));
        });

      });

  });