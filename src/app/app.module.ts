import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { BodyComponent } from './body.component';
import { FooterComponent } from './footer.component';
import { SignupComponent} from './signup.component';
import { JumbotronComponent } from './jumbotron.component';
import { CourseComponent } from './course.component';
import {AboutusComponent} from './aboutus.component';
import {WorksshowComponent} from './worksshow.component';
import {JumbotronService} from './jumbotron.service';
import {TeachersComponent} from './teachers.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    FooterComponent,
    SignupComponent,
    JumbotronComponent,
    CourseComponent,
    AboutusComponent,
    WorksshowComponent,
    TeachersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [JumbotronService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
