import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../todo'; // Import from the file in your screenshot

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  // This one line gives the HTML access to all the service functions!
  constructor(public todoService: TodoService) {}
}