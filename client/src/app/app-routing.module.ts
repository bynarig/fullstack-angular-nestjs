import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NavbarComponent } from "./basic/navbar/navbar.component";
import { FooterComponent } from "./basic/footer/footer.component";
import { NotFoundComponent } from "./basic/not-found/not-found.component";

const routes: Routes = [
    //
    { path: "navbar", component: NavbarComponent },
    { path: "footer", component: FooterComponent },
    { path: "**", component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
