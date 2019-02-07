import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';//*****new line code******

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //*****new line code******
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
