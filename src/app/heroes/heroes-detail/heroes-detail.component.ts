import { Component } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-heroes-detail',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './heroes-detail.component.html',
  styleUrl: './heroes-detail.component.css',
})
export class HeroesDetailComponent {
  hero: any;
  heroForm: FormGroup;
  constructor(
    private dashboardservice: DashboardService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.heroForm = this.fb.group({
      id: this.fb.control(''),
      name: this.fb.control(''),
    });
  }

  ngOnInit() {
    // this.activatedRoute.paramMap.subscribe((params) => {
    //   console.log(params.get('id'));
    // });
    // this.activatedRoute.params.subscribe((params) => {
    //   console.log(params['id']);
    // });
    // console.log(this.activatedRoute.snapshot.params['id']);
    this.getHeroDetail();
  }
  getHeroDetail() {
    this.dashboardservice.getHeroes().subscribe((data) => {
      this.hero = data.find(
        (hero) => hero.id == this.activatedRoute.snapshot.params['id']
      );
      // console.log(this.hero);
      this.heroForm = this.fb.group({
        id: { value: this.hero.id, disabled: true },
        name: [this.hero.name],
      });
      console.log(this.heroForm);
    });
  }
  saveHero() {}
}
