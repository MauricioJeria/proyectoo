import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {RestablecerComponent} from './restablecer/restablecer.component';
import {DocenteComponent} from './docente/docente.component';
import {EstudianteComponent} from './estudiante/estudiante.component';
import { RegisterComponent } from './register/register.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent},
  { path: 'not-found' , component: NotFoundComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'restablecer', component: RestablecerComponent},
  { path: 'docente', component: DocenteComponent},
  { path: 'estudiante', component: EstudianteComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'asistencia', component: AsistenciaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
