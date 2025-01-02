import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HometComponent } from './homet/homet.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: { 'ngSkipHydration': 'true' }, // Add this line to skip hydration

  standalone: true,
  imports: [HometComponent,RouterOutlet, RouterLink, RouterLinkActive]  // Include both components in the imports array
})
export class AppComponent {
  title = 'maprojet';
}

