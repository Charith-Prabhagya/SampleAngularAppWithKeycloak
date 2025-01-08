import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import Keycloak from 'keycloak-js';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

// Keycloak configuration
const keycloak = new Keycloak({
  url: 'http://localhost:8080', // Replace with your Keycloak server URL
  realm: 'master', // Replace with your Keycloak realm
  clientId: 'frontend',
});

// Initialize Keycloak before bootstrapping the app
keycloak
  .init({
    onLoad: 'login-required', // Automatically redirects to login
    checkLoginIframe: false,
  })
  .then(() => {
    // Pass Keycloak instance to the Angular app
    bootstrapApplication(AppComponent, {
      providers: [
        provideRouter(routes),
        { provide: Keycloak, useValue: keycloak },
      ],
    });
  })
  .catch((error) => {
    console.error('Keycloak initialization failed', error);
  });
