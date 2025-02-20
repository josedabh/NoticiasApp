import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [NavbarComponent, SidebarComponent, RouterOutlet,
        MatSidenavModule
    ]
})
export class AppComponent {
    isDesktop = true;

    ngOnInit(): void {
        this.onResize();
    }

    // Detectar cambios de tamaño para mostrar el sidebar abierto o cerrado
    @HostListener('window:resize', [])
    onResize() {
        this.isDesktop = window.innerWidth >= 992; // breakpoint "lg" de Bootstrap
    }
}
