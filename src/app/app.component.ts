import { PeriodoService } from './shared/services/periodo.service';
import { Component } from '@angular/core';
import { Periodo } from './shared/models/periodo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'beneficios-proto';

  initialData: string[] = [];
  constructor(private Periodo: PeriodoService) {
    this.initialData = this.Periodo.rootLevelNodes.slice();

}
}
