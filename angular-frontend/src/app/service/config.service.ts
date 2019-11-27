import { Injectable } from '@angular/core';

// Observableインポート
import { Observable } from 'rxjs';
// HTTPサービスインポート
import { HttpClient } from '@angular/common/http';
// 設定ファイル読み込み
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  apiGetProducts = "/products";
  apiCreateProduct = "products";
  apiDeleteProduct= "products";
  constructor(private http:HttpClient) {
    console.log(environment.apiUrl + this.apiGetProducts);
  }

  // API設定
  //一覧表示
  getAPI(): Observable<any> {
      return this.http.get(environment.apiUrl + this.apiGetProducts);
  }
}
