import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
    imports: [MatIconModule, MatSidenavModule]
})
export class SidebarComponent {
  @Input() isOpen = false;
  @Output() closeSidebar = new EventEmitter<void>();

  categories = [
      'General',
      'Tecnología',
      'Deportes',
      'Política',
      'Económicas',
      'Culturales',
      'Científicas'
  ];
}
