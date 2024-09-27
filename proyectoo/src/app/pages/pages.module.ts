import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent} from './login/login.component';
import { LogoutComponent} from './logout/logout.component';
import { AsigProfeComponent} from './asig-profe/asig-profe.component';
import { AsigAlumnoComponent} from './asig-alumno/asig-alumno.component';
import { AsistProfeComponent} from './asist-profe/asist-profe.component';
import { AsistAlumnoComponent} from './asist-alumno/asist-alumno.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    LogoutComponent,
    AsigProfeComponent,
    AsigAlumnoComponent,
    AsistProfeComponent,
    AsistAlumnoComponent

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    IonicModule

  ]
})
export class PagesModule { }
