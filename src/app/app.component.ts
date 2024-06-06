import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogService } from './blog.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
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
  email="sifatict26@gmail.com"
  onSave()
  {
    console.log("Email:"+ this.email);

  }
}
