import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpClientModule} from "@angular/common/http";
import {FooterComponent} from "./basic/footer/footer.component";
import {RegistrationComponent} from './user/registration/registration.component';
import {AuthorizationComponent} from './user/authorization/authorization.component';
import {NotFoundComponent} from './basic/not-found/not-found.component';
import {NgOptimizedImage} from "@angular/common";
import {NavbarNoneComponent} from "./basic/navbar-none/navbar-none.component";
import {FormsModule} from "@angular/forms";

// Import other necessary modules

// Register locales

@NgModule({
    declarations: [
        AppComponent,
        RegistrationComponent,
        AuthorizationComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        HttpClientModule,
        FooterComponent,
        NgOptimizedImage,
        NavbarNoneComponent,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
