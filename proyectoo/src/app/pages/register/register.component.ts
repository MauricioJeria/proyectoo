import { Component, inject } from '@angular/core';
import { Router} from '@angular/router';
import { AlertController} from '@ionic/angular';
import { AuthService} from 'src/app/servicios/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  usuario: string = '';
  clave: string = '';
  nombreCompleto: string ='';
  telefono: string = '';
  rol: string = 'estudiante';

  errorMessage: string ='';
  successMessage: string ='';

  private authService = inject(AuthService);
  private router = inject (Router);
  private alertController = inject(AlertController);

  registroFallido: boolean = false;

  async validarUsuarioExistente(usuario: string): Promise<boolean> {
    try {
      const usuariosExistentes = await this.authService.obtenerUsuarios();
      return usuariosExistentes.some(u => u.usuario === usuario);
    } catch (error){
      this.errorMessage = 'Error al validar el usuario';
      await this.mostrarAlerta('Error', 'Error al validar el usuario. intentalo denuevo');
      return true;
    }
  }

  async registrar(){
    this.errorMessage = '';
    this.successMessage = '';
    this.registroFallido = false;

    const usuarioExiste = await this.validarUsuarioExistente(this.usuario);

    if (usuarioExiste){
      this.errorMessage = 'el nombre de usuario ya esta en uso, porfavor elige otro';
      this.registroFallido = true;
      await this.mostrarAlerta('Error ', this.errorMessage);
      return;
    }
    const nuevoUsuario = {
      usuario: this.usuario,
      clave: this.clave,
      name: this.nombreCompleto,
      telefono: this.telefono,
      rol: this.rol
    };
    try{
      await this.authService.registrarNuevoUsuario(nuevoUsuario);
      this.successMessage = ' usuario registrado existosamente';
      await this.mostrarAlerta('Exito', this.successMessage);
    } catch (error){
      this.errorMessage = 'hubo un error al registrar el usuario. intentalo nuevamente';
      this.registroFallido = true;
      await this.mostrarAlerta('Error', this.errorMessage);
    }
  }
  async mostrarAlerta(header: string, message: string){
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();


  }
}
