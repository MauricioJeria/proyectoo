import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

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
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Data_URL
    });
    const imageUrl = image.webpath;
    this.imageSrc = imageUrl;
  }

}
