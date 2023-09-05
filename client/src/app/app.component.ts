import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    title = "VisitEverywhere";
    localesList = [
        { code: "en-US", label: "English" },
        { code: "uk", label: "Українська" }
    ];
}
