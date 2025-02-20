import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
    imports: [MatIconModule]
})
export class SidebarComponent {
  
  @Output() closeSidebar = new EventEmitter<void>();
  
}
