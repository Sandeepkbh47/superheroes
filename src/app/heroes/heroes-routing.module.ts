import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'herodetail/:id', component: HeroesDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
    //   dataEncapsulation: false,
    //   apiBase: 'api/',
    // }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class HeroesRoutingModule {}
