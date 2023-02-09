import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './guard/auth.guard';
import {StudentComponent} from "./component/student/student.component";
import {ProfesseurComponent} from "./component/professeur/professeur.component";

const routes: Routes = [
  { path: '', component: AppComponent , canActivate: [AuthGuard]},
  //{ path: '**', redirectTo: '' },
  { path:'student', component: StudentComponent},
  { path:'professor', component: ProfesseurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
