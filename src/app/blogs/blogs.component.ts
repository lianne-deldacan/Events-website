import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogs: any[] = [];
  selectedBlog: any = null;

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.fetchBlogs();
  }

  fetchBlogs() {
    this.blogService.getBlogs().subscribe((data) => {
      this.blogs = data;
    });
  }

  openBlog(blog: any) {
    this.selectedBlog = blog;
  }
}