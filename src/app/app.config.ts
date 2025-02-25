import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";
import { Approutes } from "./app.routes";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { TOKEN } from "./shared/utils/token-api";
import { MatSnackBarModule } from "@angular/material/snack-bar";

export const appConfig:ApplicationConfig = {
    providers:[
        {provide: TOKEN, useValue: 'eELIqsCfVHICLUdWvyOf1cuTCs7GYHHM6ywEvzdb'},
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