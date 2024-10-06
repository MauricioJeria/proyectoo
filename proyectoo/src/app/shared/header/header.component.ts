import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { Subscription} from 'rxjs';
import { AuthService} from 'src/app/servicios/auth.service';
import { DatosService} from 'src/app/servicios/datos.service';

interface UsuarioAPI {
  name: string,
  usuario: string,
  clave: string,
  telefono: string,
  rol: string
  id: string
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit, OnDestroy {
  nombre: string;
  private sharedService = inject(DatosService);

  private authService = inject(AuthService);
  usuario: string;
  usuarioCompleto: UsuarioAPI;

  subscriptionDatos: Subscription;
  subscriptionAuthService: Subscription;


  constructor() { }

  ngOnInit() {
    this.subscriptionDatos = this.sharedService.nombre$.subscribe(nombre => {
      this.nombre = nombre
      console.log('Header:',nombre);
    });
  this.subscriptionAuthService = this.authService.usuario$.subscribe(usuario => {
    this.usuario = usuario
    console.log('Header:', usuario);
  });
  this.subscriptionAuthService = this.authService.usuarioCompleto$.subscribe(usuarioCompleto => {
    this.usuarioCompleto = usuarioCompleto;
  })
  }
  ngOnDestroy(){
    this.subscriptionDatos?.unsubscribe();
    this.subscriptionAuthService?.unsubscribe();
  }

}
