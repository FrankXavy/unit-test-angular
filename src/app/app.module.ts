import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersService } from './users.service';
import { AuthInterceptor } from './auth.interceptor';
import { AuthService } from './auth.service';
import { UserRowComponent } from './user-row/user-row.component';
import { PersonRowComponent } from './person-row/person-row.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormSkuComponent } from './form-sku/form-sku.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    UserRowComponent,
    AppComponent,
    PersonRowComponent,
    UserListComponent,
    FormSkuComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
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
