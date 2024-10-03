import { Component, OnInit, inject} from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
import { WebService } from './../../servicios/web.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {
  nombre: string;
  private sharedService = inject(DatosService);

  cargando: boolean = false;
  private WebService = inject(WebService)

  constructor() { }

  ngOnInit() {

  }
  guardarNombre(): void {
    this.sharedService.setNombre(this.nombre);
    console.log('Nombre Guardado', this.nombre);

  }
  eliminarNombre(): void {
    this.sharedService.setNombre('');
    console.log('Nombre Eliminado', this.nombre);
  }
  async consumirServicio(){
    this.cargando = true;
    const url = 'https://66fec9ff2b9aac9c997d5dd0.mockapi.io/api/v1/'
    const res = await this.WebService.request('GET', url, 'usuarios');
    console.log('respuesta de servicio', res);
    this.cargando = false;
  }

}
