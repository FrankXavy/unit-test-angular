import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersService } from './users.service';
import { AuthInterceptor } from './auth.interceptor';
import { AuthService } from './auth.service';
import { UserRowComponent } from './user-row/user-row.component';
import { PersonRowComponent } from './person-row/person-row.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRowComponent
    AppComponent,
    PersonRowComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UsersService, AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
