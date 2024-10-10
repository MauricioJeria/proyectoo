import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of} from 'rxjs';
import {WebService} from './web.service';
import { UsuarioAPI} from '../models/UsuarioAPI.models';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private usuarioSubject = new BehaviorSubject<string>('');
  usuario$ = this.usuarioSubject.asObservable();

  private usuarioCompletoSubject = new BehaviorSubject<UsuarioAPI>(null);
  usuarioCompleto$ = this.usuarioCompletoSubject.asObservable();

  private loginFailedSubject = new BehaviorSubject<boolean>(false);
  loginFailed$ = this.loginFailedSubject.asObservable();

  webservice = inject(WebService);
  async buscarBD4(usuario: string, clave: string){
    const url = 'https://66fec9ff2b9aac9c997d5dd0.mockapi.io/api/v1/'
    const res = await this.webservice.request('GET', url, 'usuarios') as Array<UsuarioAPI>;

    const user = res.find(u => u.usuario === usuario && u.clave === clave);
    if(user) {
      console.log('Autenticacion Existosa');
      console.log(user);
      this.isAuthenticatedSubject.next(true);
      this.usuarioSubject.next(user.name);
      this.usuarioCompletoSubject.next(user);
      this.loginFailedSubject.next(false);
    } else {
      this.isAuthenticatedSubject.next(false);
      this.loginFailedSubject.next(true);
    }
  }
  async registrarNuevoUsuario(usuario: any){
    const url = 'https://66fec9ff2b9aac9c997d5dd0.mockapi.io/api/v1/';
    try {
      const usuariosExistentes = await this.obtenerUsuarios();
      const usuarioExistente = usuariosExistentes.find(u => u.usuario === usuario.user);
      if(usuarioExistente){
        throw new Error('el usuario ya existe');
    }
      const res = await this.webservice.request('POST', url, 'usuarios', usuario);
      console.log('usuario registrado con exito', res);
      return res;
    } catch(error) {
      console.error ('Error al registrar usuario', error);
      throw error;
  }
}
    async obtenerUsuarios(): Promise<UsuarioAPI[]> {
      const url = 'https://66fec9ff2b9aac9c997d5dd0.mockapi.io/api/v1/';
      try {
        const res = await this.webservice.request('GET', url, 'usuarios') as Array<UsuarioAPI>;
        return res;
      } catch (error) {
        console.error(' error al obtener usuarios', error);
        throw error;
      }
    }
  logout(): void {
    this.usuarioSubject.next('');
    this.usuarioCompletoSubject.next(null);
    this.isAuthenticatedSubject.next(false);
    this.loginFailedSubject.next(false);
  }

  isLoggedIn(){
    return this.isAuthenticated$;
  }

  }

