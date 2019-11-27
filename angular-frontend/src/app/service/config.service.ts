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

  constructor() { }
}
