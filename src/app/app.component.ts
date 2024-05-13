import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'SuperPower';
  heroes: any = [];
  constructor(private router: Router, private http: HttpClient) {}
  // ngOnInit() {
  //   console.log(this.router.config);
  //   this.http.get('api/heroes').subscribe((data) => {
  //     console.log(data);
  //   });
  // }
  // ngOnInit() {
  //   this.getHeroes();
  // }
  // getHeroes(): void {
  //   this.dashboardService.getHeroes().subscribe((data) => {
  //     this.heroes = data;
  //     console.log(this.heroes);
  //   });
  // }

  ngOnInit() {
    // console.log('A');
    // setTimeout(() => {
    //   console.log('B');
    // });
    // ['C', 'D'].forEach((element) => {
    //   console.log(element);
    // });
    // console.log('E');
    // const obj = [
    //   {
    //     key: 'Sample1',
    //     data: 'Data1',
    //   },
    //   {
    //     key: 'Sample2',
    //     data: 'Data2',
    //   },
    //   {
    //     key: 'Sample1',
    //     data: 'Data1',
    //   },
    //   {
    //     key: 'Sample1',
    //     data: 'Data1',
    //   },
    // ];
    // console.log(Object.groupBy(obj, ({ key }) => key));
    //output A C D E B
    //Object.groupBy(obj,({key})=>key)
  }
}
