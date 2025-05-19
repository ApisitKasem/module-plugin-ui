import { Component } from '@angular/core';
import {RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterOutlet,
    RouterLinkActive
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
  standalone: true
})
export class MainLayoutComponent {

}
