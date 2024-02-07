import { DynamicMatMenuComponent } from './../dynamic-mat-menu/dynamic-mat-menu.component';
import { PeriodoService } from './../../../shared/services/periodo.service';
import { Periodo } from './../../../shared/models/periodo';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  currentYear: number = new Date().getFullYear();
  menuAdded: boolean = false;
  periodos: Periodo[] = [];
  rootMenus: string[] = [];

  constructor(private PeriodoService: PeriodoService) {}

  ngOnInit(): void {
    // this.periodos = this.PeriodoService.getAll();
    this.rootMenus = this.PeriodoService.rootLevelNodes;
  }
}
