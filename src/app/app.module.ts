import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CollegeETalkComponent } from './college-e-talk/college-e-talk.component';
import { DepartmentsComponent } from './departments/departments.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DevelopersComponent } from './developers/developers.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    CollegeETalkComponent,
    DepartmentsComponent,
    GalleryComponent,
    DevelopersComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
