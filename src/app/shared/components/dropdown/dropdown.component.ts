import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  username: string = '';
  @Output() search = new EventEmitter<string>();

  onSearch(event: Event) {
    event.preventDefault();
    this.search.emit(this.username);
  }
}
