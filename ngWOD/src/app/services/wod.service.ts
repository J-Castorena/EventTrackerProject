import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WodService {
  private baseUrl = 'http://localhost:8083/';
  private url = this.baseUrl + 'api/wods';

  constructor(
    private http: HttpClient
  ) { }
}
