import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {SignupComponent} from './signup.component';
import {BodyComponent} from './body.component';
import {CourseComponent} from './course.component';
import {AboutusComponent} from './aboutus.component';
import {WorksshowComponent} from './worksshow.component';




const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: BodyComponent},
    { path: 'signup', component: SignupComponent },
    { path: 'course', component: CourseComponent },
    { path: 'aboutus', component: AboutusComponent},
    { path: 'worksshow', component: WorksshowComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
