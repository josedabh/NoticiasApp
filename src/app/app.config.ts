import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { Approutes } from "./app.routes";

export const appConfig:ApplicationConfig = {
    providers:[
        provideRouter(Approutes)
    ],
}