import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './heroes/dashboard/dashboard.component';
import { HeroesModule } from './heroes/heroes.module';
export const routes: Routes = [
  {
    path: 'heroes',
    // children: [{ path: '', component: DashboardComponent }],
    loadChildren: () =>
      import('./heroes/heroes.module').then((m) => m.HeroesModule),
  },
  // {
  //   path: '**',
  //   component: AppComponent,
  // },
];
