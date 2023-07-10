import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName=' Joaquim'
  userData={
    email: 'joaquim@gmail.com',
    role: 'Admin'
  }
  title = 'curso-angular';
  Name = 'Hugo bonitão'
}
