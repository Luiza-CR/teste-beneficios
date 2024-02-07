export interface Periodo {
  ano: number;
  periodos: Array<PeriodoItem>;
}

export interface PeriodoItem {
  id: string;
  periodo: number;
}
