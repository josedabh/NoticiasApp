import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-noticias',
    template: '<router-outlet></router-outlet>',
    styleUrl: './noticias.component.scss',
    imports: [RouterOutlet]
})
export class NoticiasComponent {

}
