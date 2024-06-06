import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [BlogService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular_practise';
  blogPosts;
  constructor() {
    let service = new BlogService();
    this.blogPosts = service.getBlogPost();
  }
}
