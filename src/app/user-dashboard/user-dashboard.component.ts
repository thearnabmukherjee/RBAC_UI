import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../class/user.model';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent {
  status: string = 'Student';
  currentUser: User;

  constructor(private userService: UserService) {
    this.currentUser = this.userService.getCurrentUser();
    if (this.currentUser) {
      this.status = this.currentUser.role;
    }
  }

  updateStatus() {
    this.currentUser.role = this.status;
    this.userService.updateUser(this.currentUser);
    alert('Your status has been updated!');
  }
}
