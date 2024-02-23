import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateTransformServiceService {

  constructor(private datePipe: DatePipe) { }

  transformDate(date: Date): string{

    let currentDate: string | null  = this.datePipe.transform(date, 'yyyy-MM-ddTHH:mm:ss.SSS');
    if(currentDate != null){

      return currentDate;
    }
    return '';
  }
}
