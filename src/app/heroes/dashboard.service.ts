import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private dashboardDataUrl = 'api/heroes';
  private nodeDataUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): Observable<any[]> {
    // return this.http.get<any[]>(this.dashboardDataUrl);
    console.log('Execute');
    // this.http.get('http://localhost:3000/getHeroes').subscribe(function (data) {
    //   console.log(data);
    // });
    return this.http.get<any[]>(this.nodeDataUrl + '/getHeroes');
  }
}
