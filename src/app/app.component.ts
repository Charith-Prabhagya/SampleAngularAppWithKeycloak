import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink],

  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'sample-app';
  user: string | undefined;

  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.user = this.authService.getUsername();
    }
  }

  logout(): void {
    this.authService.logout();
  }

  login(): void {
    this.authService.login();
    // this.user = 'John Doe'; // Simulate a login (replace with actual auth logic)
  }
}
