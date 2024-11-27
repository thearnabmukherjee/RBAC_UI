import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../class/user.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  users: User[] = [];
  isModalOpen: boolean = false;
  isEdit: boolean = false;
  currentUser: User = { id: 0, name: '', email: '', role: 'Student' }; 
  showModal: boolean | undefined;

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers(); // Fetch the user list on initialization
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  /**
   * Opens the modal to add a new user.
   */
  addUser() {
    this.isEdit = false;
    this.currentUser = { id: 0, name: '', email: '', role: 'Student' }; // Reset user data
    this.showModal = true;
  }

  /**
   * Opens the modal to edit an existing user.
   * @param user The user to be edited
   */
  editUser(user: User) {
    this.isEdit = true;
    this.currentUser = { ...user }; // Copy user data to avoid modifying the original
    this.showModal = true;
  }

  /**
   * Handles the save event from the modal.
   * @param user The user data from the modal
   */
  saveUser(user: User) {
    if (this.isEdit) {
      // Update existing user
      this.userService.updateUser(user);
    } else {
      // Add a new user
      this.userService.addUser(user);
    }
    this.users = this.userService.getUsers(); // Refresh the user list
    this.showModal = false; // Close the modal
  }

  /**
   * Deletes a user by ID.
   * @param id The ID of the user to be deleted
   */
  deleteUser(id: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id);
      this.users = this.userService.getUsers(); // Refresh the user list
    }
  }
}
