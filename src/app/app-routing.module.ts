import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CollegeETalkComponent } from './college-e-talk/college-e-talk.component';
import { DepartmentsComponent } from './departments/departments.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DevelopersComponent } from './developers/developers.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent},
{ path: 'about', component: AboutComponent},
{ path: 'college-e-talk', component: CollegeETalkComponent},
{ path: 'departments', component: DepartmentsComponent},
{ path: 'gallery', component: GalleryComponent},
{ path: 'developers', component: DevelopersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
