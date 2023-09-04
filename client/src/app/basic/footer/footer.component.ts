import { Component } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
    imports: [CommonModule, NgOptimizedImage],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

}
