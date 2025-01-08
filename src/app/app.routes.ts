import { Routes } from '@angular/router';
import { KeycloakAuthGuard } from './keycloak-auth.guard';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [KeycloakAuthGuard],
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [KeycloakAuthGuard],
    // data: { roles: ['admin', 'user'] },
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [KeycloakAuthGuard],
    // data: { roles: ['admin', 'user'] },
  },
  { path: '**', redirectTo: '' },
];
