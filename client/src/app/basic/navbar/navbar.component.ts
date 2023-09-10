import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FooterComponent} from "../footer/footer.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, NgOptimizedImage, FooterComponent],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

}
