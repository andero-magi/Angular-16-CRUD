import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-16-CRUD';
  sidebarOpen = true;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
