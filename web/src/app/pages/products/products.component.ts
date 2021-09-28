import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
 
@Component({
  selector: 'app-page-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsPageComponent{

  Products: Product[] = []
  
  constructor() { 

    const data = [
      {
        id: "1",
        image: '../assets/pizza.jpg',
        name: 'Pizza Mussarela',
        price: '10.50',
        description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets"
      },
      {
        id: "2",
        image: '../assets/pizza.jpg',
        name: 'Pizza Calabresa',
        price: '10.50',
        description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets"
      }
    ]
  

    this.Products = data.map( cur => new Product(cur, cur.id) );

  }



}
