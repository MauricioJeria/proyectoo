import { Component, ElementRef, OnInit, inject, ViewChild, OnDestroy } from '@angular/core';
import QRious from 'qrious';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.scss'],
})
export class DocenteComponent  implements OnInit {

  usuario: string;
  asignaturas = [
    {nombre: 'Lenguaje', id: '101'},
    {nombre: 'Matematicas', id: '102'},
    {nombre: 'Religion', id: '103'},
    {nombre: 'Artes Visuales', id: '104'}
  ];


  qrData: string = '';
  showQRcode: boolean = false;




  @ViewChild('qrCanvas') qrCanvas!: ElementRef<HTMLCanvasElement>;



  generarQR(asignaturaId: string){
    const fechaAct = new Date();
    const año = fechaAct.getFullYear();
    const mes = String(fechaAct.getMonth()+1).padStart(2,'0');
    const dia = String(fechaAct.getDate()).padStart(2,'0');

    const horas = String (fechaAct.getHours()).padStart(2,'0');
    const min = String (fechaAct.getMinutes()).padStart(2,'0');
    const seg = String(fechaAct.getSeconds()).padStart(2,'0');

    const fechaHora = `${año}-${mes}-${dia},${horas}:${min}:${seg}`;
    this.qrData = `http://localhost:8100/asistencia/${asignaturaId}/${this.usuario}/${fechaHora}`;
    this.showQRcode = true;
    this.createQR();
  }

  createQR(){
    const qr = new QRious({
      element: this.qrCanvas.nativeElement,
      value: this.qrData,
      size: 256,
      level: 'M'
    });
  }


  constructor() { }

  ngOnInit() {

  }

}
