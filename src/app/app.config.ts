import { registerLocaleData } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import localeEs from '@angular/common/locales/es';
import { ApplicationConfig, importProvidersFrom, LOCALE_ID } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { Approutes } from './app.routes';

registerLocaleData(localeEs, 'es');

export const appConfig:ApplicationConfig = {
    providers:[
        { provide: LOCALE_ID, useValue: 'es'},
        provideAnimations(),
        importProvidersFrom(
            MatSnackBarModule
        ),
        provideHttpClient(
            withInterceptorsFromDi()
        ),
        provideRouter(Approutes)
    ],
}