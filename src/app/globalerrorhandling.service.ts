import { Injectable } from '@angular/core';
import { ErrorHandler } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class GlobalerrorhandlingService implements ErrorHandler{

  constructor() { }
  handleError(error: any): void { // erooe: any it will get no error in disply
      alert(error.message + "I am being held at the global error handling error area")

    }
}
