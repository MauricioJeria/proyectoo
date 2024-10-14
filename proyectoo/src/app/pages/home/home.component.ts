import { Component, OnInit, inject} from '@angular/core';
import { WebService } from 'src/app/servicios/web.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {


  cargando: boolean = false;
  private WebService = inject(WebService)

  constructor() { }

  ngOnInit() {

  }




  
}
