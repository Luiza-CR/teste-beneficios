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

    if (!this.dataLoaded) {
      console.log(`entrou aqui?: dataLoaded : ${this.dataLoaded}`);
      this.isLoading = true;
      console.log(`entrou aqui?: isLoading : ${this.isLoading}`);
      this.periodoService.getChildren(node).subscribe((d) => {
        console.log(`entrou aqui?: getChildren data : ${this.data}`);
        console.log(`entrou aqui?: getChildren isRootNoode : ${this.isRootNode}`);
        console.log(`entrou aqui?: getChildren periodoService : ${this.periodoService}`);
        console.log(`entrou aqui?: getChildren trigger : ${this.trigger}`);
        console.log(`entrou aqui?: getChildren getData : ${this.getData}`);
        console.log(`entrou aqui?: getChildren IsExpandable : ${this.isExpandable}`);
        this.data = d?.slice() || [];
        this.isLoading = false;
        this.dataLoaded = false;
      });
    }
  }

  isExpandable(node: string) {
    return this.periodoService.isExpandable(node);
  }
}
