import { Component } from '@angular/core';

// API設定インポート
import { ConfigService } from '../service/config.service';
import { Products } from '../products';

let ApiData: Products[] = [];

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  productsItemLatest: Products;

  /**
 * @method constructor
 * @param configService
 * @param title
 * @param products
 * @param dataSource
 */
    title = '商品一覧';
    // products = products;
    dataSource = ApiData;

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.refresh()
  }

  /**
 * @method refresh
 * @description
 *  Todoの取得を行い、画面に表示する
 */
 refresh() {

    // API読み込み
    this.configService.getAPI().subscribe(res => {
        this.dataSource = [];
        res.forEach(product => {
        let productsObj:Products = new Products();
        productsObj.id          = product.id;
        productsObj.name       = product.name;
        productsObj.price    = product.price;
        productsObj.description     = product.description;
        productsObj.created_at  = product.created_at;
        productsObj.updated_at  = product.updated_at;
        this.dataSource.push(productsObj);
        this.productsItemLatest = this.dataSource[0];

      });

    });
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
