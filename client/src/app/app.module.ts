import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";
import { FooterComponent } from "./basic/footer/footer.component";
import { RegistrationComponent } from './user/registration/registration.component';
import { AuthorizationComponent } from './user/authorization/authorization.component';

// Import other necessary modules

// Register locales

@NgModule({
    declarations: [
        AppComponent,
        RegistrationComponent,
        AuthorizationComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        HttpClientModule,
        FooterComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
