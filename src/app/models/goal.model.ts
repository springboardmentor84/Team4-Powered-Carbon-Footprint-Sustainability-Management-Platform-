export interface Goal {

  id?: number;

  title: string;

  type: string;

  targetKg: number;

  currentKg: number;

  unit: string;

  startDate: string;

  endDate: string;

  status: string;

  email?: string;

}