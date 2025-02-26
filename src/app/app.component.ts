import { Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NoticiasApiService } from './shared/services/noticias-api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [NavbarComponent, SidebarComponent, RouterOutlet,
        MatSidenavModule
    ]
})
export class AppComponent {
    isSidebarOpen = false;

    //Servicios
    readonly #apiNoticia = inject(NoticiasApiService);

    /**
     * Método para manejar el evento de redimensión de la ventana
     */
    toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
    }
}
