import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private nombreSubject = new BehaviorSubject<string>('');
  nombre$ = this.nombreSubject.asObservable();

  constructor() { }
  setNombre(nombre: string): void {
    this.nombreSubject.next(nombre);
  }
  getNombre(): string {
    return this.nombreSubject.getValue();
  }
}
