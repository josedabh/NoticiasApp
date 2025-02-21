import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../../app.routes';

@Component({
    selector: 'app-error404',
    templateUrl: './error404.component.html',
    styleUrl: './error404.component.scss',
    imports: [MatButtonModule]
})
export class Error404Component {

    readonly #router = inject(Router);
    
    /**
     * LLeva a la pagina principal
     */
    goBack(){
        this.#router.navigate([APP_ROUTES.NOTICIAS]);
    }
}
