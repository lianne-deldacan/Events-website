import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-admin-blogs',
  templateUrl: './admin-blogs.component.html',
  styleUrls: ['./admin-blogs.component.css']
})

export class AdminBlogsComponent implements OnInit {
  blogs: any[] = [];
  newBlog: any = {
    title: '',
    content: '',
    author: '',
  };
  showCreateModal: boolean = false; // Track modal visibility

  constructor(private blogsService: BlogService) {}

  ngOnInit() {
    this.getBlogs();
  }

  // Fetch all blogs
  getBlogs() {
    this.blogsService.getBlogs().subscribe((data) => {
      this.blogs = data;
    });
  }

  // Open the Add Blog Modal
  openCreateModal() {
    this.newBlog = { title: '', content: '', author: '' }; // Clear input
    this.showCreateModal = true;
  }

  // Close the Add Blog Modal
  closeCreateModal() {
    this.showCreateModal = false;
  }

  // Add a new blog
  addBlog() {
    if (!this.newBlog.title || !this.newBlog.content || !this.newBlog.author) {
      alert('All fields are required!');
      return;
    }

    this.blogsService.createBlog(this.newBlog).subscribe(() => {
      alert('Blog added successfully!');
      this.getBlogs(); // Refresh the table
      this.closeCreateModal(); // Close the modal
    });
  }

  // Delete a blog
  deleteBlog(id: string) {
    const confirmDelete = confirm('Are you sure you want to delete this blog?');
    if (confirmDelete) {
      this.blogsService.deleteBlog(id).subscribe(() => {
        alert('Blog deleted successfully!');
        this.getBlogs(); // Refresh the table
      });
    }
  }

  // Edit a blog
  editBlog(blog: any) {
    const updatedTitle = prompt('Edit Blog Title:', blog.title);
    if (updatedTitle && updatedTitle.trim()) {
      const updatedBlog = { ...blog, title: updatedTitle.trim() };
      this.blogsService.updateBlog(blog._id, updatedBlog).subscribe(() => {
        alert('Blog updated successfully!');
        this.getBlogs(); // Refresh the table
      });
    } else {
      alert('Blog title is required to update!');
    }
  }
}