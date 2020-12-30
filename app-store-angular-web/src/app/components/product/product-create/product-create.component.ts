import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import {Product} from "../product.model";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  googleHomeProduct: Product = {
    name: 'Google Home',
    price: 220.99
  }

  createProduct(): void{
    this.productService.cadastrarProduto(this.googleHomeProduct).subscribe(() =>{
      this.productService.showMesssage('Produto salvo');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void{
    this.router.navigate(['/products']);
  }

}
