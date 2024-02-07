import { Injectable } from '@angular/core';
import { delay, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PeriodoService {

  dataMap = new Map<string, string[]> ([

    ['2024', ['1','2']],
    ['2023', ['1','2']],
    ['2022', ['1','2']],
    ['2021', ['1','2']],
    ['2020', ['1','2']]

  ]);

  rootLevelNodes: string[] = ['2024', '2023', '2022', '2021'];


  getChildren(node: string) {
    // adding delay to mock a REST API call

    return of(this.dataMap.get(node)).pipe(delay(1000));

  }

  isExpandable(node: string): boolean {
   
    return this.dataMap.has(node);

  }
}
