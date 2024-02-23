import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

const API_URL="https://localhost:5001/api/Product/"
@Injectable({
  providedIn: 'root'
})


export class ProductService {

  constructor(private http: HttpClient) { }


  getDataByBarcode(barcode: string){

   return this.http.get<Product>(API_URL+'barcode/json/'+barcode)

  }
}
