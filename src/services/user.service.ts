import { Injectable } from '@angular/core';
import { User } from '../class/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Employed' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Student' }
  ];

  private currentUser: User = this.users[0]; // Simulate a logged-in user

  getUsers(): User[] {
    return [...this.users];
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  addUser(user: User) {
    user.id = this.users.length + 1;
    this.users.push(user);
  }

  updateUser(updatedUser: User) {
    const index = this.users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
  }

  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }
}
