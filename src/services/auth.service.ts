import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { email: 'admin@example.com', password: 'admin123', role: 'admin' },
    { email: 'user@example.com', password: 'user123', role: 'user' }
  ];

  private loggedInUser: any = null;

  constructor(private router: Router) {}

  login(email: string, password: string, role: string): boolean {
    const user = this.users.find(
      u => u.email === email && u.password === password && u.role === role
    );
    if (user) {
      this.loggedInUser = user;
      return true;
    }
    return false;
  }

  logout() {
    this.loggedInUser = null;
    this.router.navigate(['/login']);
  }

  getLoggedInUser() {
    return this.loggedInUser;
  }

  isAuthenticated(): boolean {
    return !!this.loggedInUser;
  }

  hasRole(role: string): boolean {
    return this.loggedInUser?.role === role;
  }
}