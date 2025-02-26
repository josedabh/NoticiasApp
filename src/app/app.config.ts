import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { Approutes } from './app.routes';

export const appConfig:ApplicationConfig = {
    providers:[
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