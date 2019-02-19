import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UsersService } from './users.service';
import { User } from './user';

describe('Tests from UsersService', ()=>{

  let injector: TestBed;
  let userService: UsersService;
  let httpMock: HttpTestingController;

  const dummyUser = {
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
                    };

  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService]
    });

    injector = getTestBed();
    userService = injector.get(UsersService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(()=>{
    httpMock.verify();
  });

  describe('Testing getUser', ()=>{

    it('Shoud return a user', ()=>{

      userService.getUser(1).subscribe(
        data => {
          expect(data).toBeDefined();
          expect(data.name).toBeDefined();
          expect(data.name).toEqual("Leanne Graham");
        }
      );

      const req = httpMock.expectOne(`${userService.path}/1`);
      expect(req.request.method).toBe("GET");
      req.flush(dummyUser);

    });

    it('Should return error', ()=>{
      userService.getUser(1).subscribe(
        data => {
          console.log(data);
        },
        error =>{
          //expect(data).toBeUndefined();
          expect(error).toBeDefined();
        }
      );

      const req = httpMock.expectOne(`${userService.path}/1`);
      expect(req.request.method).toBe("GET");
      req.error(new ErrorEvent('error'));

    });

  });

  describe('test for createUser' ,()=>{
          it("should return a new user", ()=> {
            //arrange
            let dataError;
            let newUser: User = {
              id: 0,
              name : "Leanne Graham",
              email : "Sincere@april.biz",
              phone : "1-770-736-8031 x56442",
              website: '',
              address: {},
              company: {}
            };
            userService.createUser(newUser).subscribe(
              response => {
                expect(response).toBeDefined();
                console.log('response-->'+response);
                let newUserCreated = new User();
                newUserCreated = response;
                expect(newUserCreated).toBeDefined();
                expect(newUserCreated.id).toBeDefined();
                expect(newUserCreated.name).toEqual('Leanne Graham');
                expect(newUserCreated.email).toEqual('Sincere@april.biz');
                expect(newUserCreated.phone).toEqual('1-770-736-8031 x56442');
              },
              error => {
                dataError = error;
              }
            );
            const req = httpMock.expectOne(`${userService.path}`);
            expect(req.request.method).toBe("POST");
            expect(req.request.url).toBe('http://jsonplaceholder.typicode.com/users');
            req.flush(dummyUser);
          });

          it("should return an error when a new user is created", ()=> {
            //arrange
            let dataResponse, dataError;
            let newUser = new User();
            newUser.name = "Leane Graham";
            newUser.email = "Sincere@april.biz";
            newUser.phone = "1-770-736-8031 x56442";
            userService.createUser(newUser).subscribe(
              response => {
                dataResponse = response;
              },
              error => {
                dataError = error;
                expect(error).toBeDefined();
              }
            );
            expect(dataResponse).toBeUndefined();
            const req = httpMock.expectOne(`${userService.path}`);
            expect(req.request.method).toBe("POST");
            expect(req.request.url).toBe('http://jsonplaceholder.typicode.com/users');
            req.error(new ErrorEvent('error'));
          });
   });

   describe('test for update User', ()=>{
    it('shpuld return a user updated', ()=>{
      let resultError;
      let result:User = new User();
      let updateUser = new User();
      updateUser.id = 1;
      updateUser.name = "Leanne Graham";
      updateUser.email = "Sincere@april.biz";
      updateUser.phone = "1-770-736-8031 x56442";

      userService.updateUser(updateUser).subscribe(
        response => {
          result = response;
        },
        error => {
          resultError = error;
        }
      );

      const req = httpMock.expectOne(`${userService.path}/1`);
      expect(req.request.method).toBe("PUT");
      expect(req.request.url).toBe('http://jsonplaceholder.typicode.com/users/1');
      req.flush(dummyUser);

      expect(resultError).toBeUndefined();
      expect(result).toBeDefined();
      expect(result.name).toEqual("Leanne Graham");
    });

    it('shpuld return a error when user updated', ()=>{
          let resultError;
          let result:User = new User();
          let updateUser = new User();
          updateUser.id = 1;
          updateUser.name = "Leanne Graham";
          updateUser.email = "Sincere@april.biz";
          updateUser.phone = "1-770-736-8031 x56442";

          userService.updateUser(updateUser).subscribe(
            response => {
              result = response;
            },
            error => {
              resultError = error;
            }
          );

          const req = httpMock.expectOne(`${userService.path}/1`);
          expect(req.request.method).toBe("PUT");
          expect(req.request.url).toBe('http://jsonplaceholder.typicode.com/users/1');
          req.error(new ErrorEvent('error'));

          expect(resultError).toBeDefined();
          expect(result).toBeDefined();
          expect(result.id).toBeUndefined();
        });
   });

   describe('Test for deleteUser', ()=>{

    it('should return an empty objet {}', ()=>{

      let resultError;
      let result;
      let deleteUser = new User();
      deleteUser.id = 1;
      deleteUser.name = "Leanne Graham";
      deleteUser.email = "Sincere@april.biz";
      deleteUser.phone = "1-770-736-8031 x56442";

      userService.deleteUser(deleteUser).subscribe(
        response => {
          result = response;
        },
        error => {
          resultError = error;
        }
      );

      const req = httpMock.expectOne(`${userService.path}/1`);
      expect(req.request.method).toBe("DELETE");
      expect(req.request.url).toBe('http://jsonplaceholder.typicode.com/users/1');
      req.flush("{}");

      expect(result).toBeDefined();
      expect(result).toEqual("{}");
    });

    it('should return an error', ()=>{

          let resultError;
          let result;
          let deleteUser = new User();
          deleteUser.id = 1;
          deleteUser.name = "Leanne Graham";
          deleteUser.email = "Sincere@april.biz";
          deleteUser.phone = "1-770-736-8031 x56442";

          userService.deleteUser(deleteUser).subscribe(
            response => {
              result = response;
            },
            error => {
              resultError = error;
            }
          );

          const req = httpMock.expectOne(`${userService.path}/1`);
          expect(req.request.method).toBe("DELETE");
          expect(req.request.url).toBe('http://jsonplaceholder.typicode.com/users/1');
          req.error(new ErrorEvent('error'));

          expect(resultError).toBeDefined();
          expect(result).toBeUndefined();
        });
   });

});
