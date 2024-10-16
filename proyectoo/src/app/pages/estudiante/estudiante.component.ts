import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType,CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss'],
})
export class EstudianteComponent  {
  photo: string | undefined;

  asignaturas = [
    {nombre: 'Lenguaje', id: '101'},
    {nombre: 'Matematicas', id: '102'},
    {nombre: 'Religion', id: '103'},
    {nombre: 'Artes Visuales', id: '104'}
  ];

  public imageSrc: string | undefined = '';


  async takePicture(){
    try {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl
    });
    const imageUrl = image.webPath;
    this.imageSrc = imageUrl;

   } catch (error) {
    const err = error as {message: string}
    if(err.message.includes('User cancelled photos app')){
      console.log('La captura de imagen fue cancelada');
    }else{
      console.error('Error al tomar la imagen', err);

    }
    }
}

}
