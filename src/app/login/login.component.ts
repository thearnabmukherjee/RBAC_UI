import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = ''; 
  password: string = ''; 
  role: string = 'user'; 

  constructor(private authService: AuthService, private router: Router) {}
login(): void {
    if (!this.role) {
      alert('Please select a role!');
      return;
    }

    if (this.authService.login(this.email, this.password, this.role)) {
      // Get logged-in user role
      const role = this.authService.getLoggedInUser().role;

      // Navigate based on role
      if (role === 'admin') {
        this.router.navigate(['/admin-dashboard']);
      } else if (role === 'user') {
        this.router.navigate(['/user-dashboard']);
      }
    } else {
      alert('Invalid credentials! Please try again.');
    }
  }
}