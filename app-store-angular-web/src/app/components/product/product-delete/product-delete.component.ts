import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../product.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  };

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.pesquisarPorId(id).subscribe(p=>{
      this.product = p;
    });

  }


  excluirProduto(){
    this.productService.excluirProduto(this.product.id).subscribe(() => {
      this.productService.showMesssage(`Produto ${this.product.name} Excluído`);
      this.router.navigate(['/products']);
    });
  }

  cancel() {
    this.router.navigate(['/products']);
  }
}
