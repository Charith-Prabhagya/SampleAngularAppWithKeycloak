import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly keycloak: Keycloak) {}

  isAuthenticated(): boolean {
    return this.keycloak.authenticated || false;
  }

  getUsername(): string | undefined {
    return this.keycloak.tokenParsed?.['preferred_username'];
  }

  login(): void {
    this.keycloak.login(); // Redirects to Keycloak login page
  }

  logout(): void {
    this.keycloak.logout();
  }
}
