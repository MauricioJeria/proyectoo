import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.scss'],
})
export class AsistenciaComponent  implements OnInit {

  private route = inject(ActivatedRoute);

  constructor() {
    this.route.params.subscribe(params => {
      console.log(params);
      console.log('Id: ' + params['id']);
      console.log('Usuario: ' + params['usuario']);
      console.log('Fecha: ' + params['fecha']);
    });

  }

  ngOnInit() {}

}
