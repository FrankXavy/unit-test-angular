import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UsersService } from './users.service';
import { User } from './user';
import { AuthService } from './auth.service';
import { AuthInterceptor } from './auth.interceptor';

describe('Tests from UsersService with interceptors', ()=>{

  let injector: TestBed;
  let userService: UsersService;
  let httpMock: HttpTestingController;

   const mockAuthService = {
          tokenType: 'fake',
          tokenValue: 'fake'
      };

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
      providers: [UsersService,
      {
        provide: AuthService,
        useValue: mockAuthService
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      }
      ]
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
      const req = httpMock.expectOne(r =>
            r.headers.has('API-TOKEN') &&
            r.headers.has('Authorization') &&
            r.headers.get('Authorization') === `${mockAuthService.tokenType} ${mockAuthService.tokenValue}`);
      expect(req.request.method).toBe("GET");

      req.flush(dummyUser);

    });

    it('Should return error', ()=>{
      userService.getUser(1).subscribe(
        data => {
          console.log(data);
        },
        error =>{
          expect(error).toBeDefined();
        }
      );

      const req = httpMock.expectOne(`${userService.path}/1`);
      expect(req.request.method).toBe("GET");
      req.error(new ErrorEvent('error'));

    });

  });



});
