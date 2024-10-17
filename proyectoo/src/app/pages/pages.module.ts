import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent} from './login/login.component';
import { LogoutComponent} from './logout/logout.component';
import { RestablecerComponent} from './restablecer/restablecer.component';
import { DocenteComponent} from './docente/docente.component';
import { EstudianteComponent} from './estudiante/estudiante.component';
import { RegisterComponent} from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsistenciaComponent } from './asistencia/asistencia.component';




@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    LogoutComponent,
    RestablecerComponent,
    DocenteComponent,
    EstudianteComponent,
    RegisterComponent,
    AsistenciaComponent

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class PagesModule { }
