import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorizationComponent} from "./authorization/authorization.component";
import {RegistrationComponent} from "./registration/registration.component";

const userRoutes: Routes = [
    {path: '', redirectTo: 'registration', pathMatch: 'full'}, // Redirect needs for child routers so need to set up it
    {path: "authorization", component: AuthorizationComponent},
    {path: "registration", component: RegistrationComponent}
];

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class UserRoutingModule {
}
