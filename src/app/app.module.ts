import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SolutionPageComponent } from './solution-page/solution-page.component';
import { ContactPgeComponent } from './contact-pge/contact-pge.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllCoursesComponent } from './view-all-courses/view-all-courses.component';
import { HttpClientModule } from '@angular/common/http';

const myRoute:Routes=[
  {
    path:"admin",
    component:AdminLoginComponent
  },
  {
    path:"",
    component:HomePageComponent
  },
  {
    path:"about",
    component:AboutPageComponent
  },
  {
    path:"solution",
    component:SolutionPageComponent
  },
  {
    path:"contact",
    component:ContactPgeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SolutionPageComponent,
    ContactPgeComponent,
    AboutPageComponent,
    AdminLoginComponent,
    NavigationComponent,
    ViewAllCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
