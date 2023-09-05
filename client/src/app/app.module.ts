import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { registerLocaleData } from "@angular/common";
import localeEn from "@angular/common/locales/en";
import localeUk from "@angular/common/locales/uk";

// Import other necessary modules

// Register locales
registerLocaleData(localeEn);
registerLocaleData(localeUk);

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
