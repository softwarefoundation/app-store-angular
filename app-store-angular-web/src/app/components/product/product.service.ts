import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import {Product} from "./product.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products";

  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) { }

  showMesssage(msg: string): void {
    this.snackBar.open(msg , 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  cadastrarProduto(product: Product): Observable<Product>{
    console.log('Cadastrando produto: ' + product);
    return this.httpClient.post<Product>(this.baseUrl, product);
  }

  listarProdutos():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.baseUrl);
  }

  pesquisarPorId(id:string):Observable<Product>{
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<Product>(url);
  }

  atualizarProduto(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`;
    return this.httpClient.put<Product>(url,product);
  }

  excluirProduto(id:number): Observable<Product>{
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete<Product>(url);
  }

}
