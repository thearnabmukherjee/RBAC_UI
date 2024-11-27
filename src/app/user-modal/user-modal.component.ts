import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent {
  @Input() isEdit: boolean = false;
  @Input() userData: any = { name: '', email: '', role: 'Student' };
  @Output() onSave = new EventEmitter<any>();
  @Output() onClose = new EventEmitter<void>();

  save() {
    if (!this.userData.name || !this.userData.email) {
      alert('Please fill out all fields.');
      return;
    }
    this.onSave.emit(this.userData);
  }
}
