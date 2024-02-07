import { Component, Input, ViewChild } from '@angular/core';
import { PeriodoService } from '../../../shared/services/periodo.service';


@Component({
  selector: 'app-dynamic-mat-menu',
  templateUrl: './dynamic-mat-menu.component.html',
  styleUrl: './dynamic-mat-menu.component.scss',
})
export class DynamicMatMenuComponent {
  @Input() data: string[] = [];
  @Input() trigger = "Períodos";
  @Input() isRootNode = false;

  isLoading = false;
  dataLoaded = false;


  constructor(private periodoService: PeriodoService) {}

  getData(node: string) {
    console.log(`Node: ${node}`);
    if (this.dataLoaded) {
      console.log(`entrou aqui: ${this.dataLoaded}`);
      this.isLoading = true;
      this.periodoService.getChildren(node).subscribe((d) => {
        this.data = d?.slice() || [];
        this.isLoading = false;
        this.dataLoaded = true;
      });
    }
  }

  isExpandable(node: string) {
    return this.periodoService.isExpandable(node);
  }
}
