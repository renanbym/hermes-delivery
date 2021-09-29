import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-sidenav-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductSideNavComponent implements OnInit {

  Product: Product;

  constructor() { 
    const data = {
        id: "1",
        image: '../assets/pizza.jpg',
        name: 'Pizza Mussarela',
        price: '10.50',
        description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets"
    }

    this.Product = new Product(data)

  }

  ngOnInit(): void {
  }

}
