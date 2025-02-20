import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    imports: [RouterLink],
})
export class NavbarComponent {
  @Output() sidebarToggle = new EventEmitter<void>();

  toggleSidebar() {
      this.sidebarToggle.emit();
  }
}
