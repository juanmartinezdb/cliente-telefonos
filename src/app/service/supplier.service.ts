import { Supplier } from './../model/supplier';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  http = inject(HttpClient);
  private suppliersSubject = new BehaviorSubject<Supplier[]>([]);
  supplier$ = this.suppliersSubject.asObservable();

  constructor() {
    this.cargaSuppliers()
  }

  cargaSuppliers() {
    this.http.get<Supplier[]>('suppliersdb.json').subscribe({
      next: (s) => {
        this.suppliersSubject.next(s);
        console.log("supliers carga:",s);

      }, error: (er) => {
        console.error('Error cargan suppliers', er);
      }
    });
  }
}
