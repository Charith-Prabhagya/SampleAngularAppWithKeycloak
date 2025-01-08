import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import Keycloak from 'keycloak-js';

@Injectable({
  providedIn: 'root',
})
export class KeycloakAuthGuard implements CanActivate {
  constructor(private readonly keycloak: Keycloak) {}

  async canActivate(): Promise<boolean> {
    if (this.keycloak.authenticated) {
      return true;
    }
    await this.keycloak.login();
    return false;
  }
}
