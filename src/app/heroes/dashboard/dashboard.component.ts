import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DashboardService } from '../dashboard.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  private dashboardDataUrl = 'api/heroes';
  heroes: Hero[] = [];
  heroObservable$: Observable<any[]> | undefined;
  constructor(
    private dashboardService: DashboardService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.heroservice.getHeroes().subscribe((data) => {
    //   this.heroes = data;
    // });
    this.fetchHeroes();
  }

  fetchHeroes() {
    this.heroObservable$ = this.dashboardService.getHeroes();
    // .subscribe((data) => {
    //   this.heroes = data;
    //   console.log(this.heroes);
    // });
  }

  heroDetails(id: number) {
    this.router.navigate(['./heroes/herodetail', id]);
  }
}
