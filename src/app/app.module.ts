import { GitUserApiService } from './service/gituserapiservice.service';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent  

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [GitUserApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }