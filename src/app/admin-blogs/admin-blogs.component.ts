import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-admin-blogs',
  templateUrl: './admin-blogs.component.html',
  styleUrls: ['./admin-blogs.component.css']
})
export class AdminBlogsComponent implements OnInit {
  blogs: any[] = [];
  categories: any[] = [];
  showModal = false;
  isEditing = false;

  newBlog = {
    title: '',
    content: '',
    category: ''
  };

  editingBlog = {
    _id: '',
    title: '',
    content: '',
    category: ''
  };

  constructor(private blogService: BlogService, private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.fetchBlogs();
    this.fetchCategories();
  }

  fetchBlogs() {
    this.blogService.getBlogs().subscribe((data) => {
      this.blogs = data;
    });
  }

  fetchCategories() {
    this.categoriesService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  createBlog() {
    if (this.newBlog.title && this.newBlog.content && this.newBlog.category) {
      this.blogService.createBlog(this.newBlog).subscribe(() => {
        this.fetchBlogs();
        this.showModal = false;
        this.resetForm();
      });
    } else {
      alert('All fields are required!');
    }
  }

  deleteBlog(id: string) {
    if (confirm('Are you sure you want to delete this blog?')) {
      this.blogService.deleteBlog(id).subscribe(() => {
        this.fetchBlogs();
      });
    }
  }

  openEditModal(blog: any) {
    this.isEditing = true;
    this.showModal = true;
    this.editingBlog = { ...blog };
  }

updateBlog() {
  if (this.editingBlog.title && this.editingBlog.content && this.editingBlog.category) {
    console.log('Updating blog:', this.editingBlog); // Debugging

    this.blogService.updateBlog(this.editingBlog._id, {
      title: this.editingBlog.title,
      content: this.editingBlog.content,
      category: this.editingBlog.category
    }).subscribe(
      (response) => {
        console.log('Blog updated successfully:', response);
        this.fetchBlogs();
        this.showModal = false;
        this.isEditing = false;
        this.resetForm();
      },
      (error) => {
        console.error('Error updating blog:', error);
      }
    );
  } else {
    alert('All fields are required!');
  }
}


  resetForm() {
    this.newBlog = { title: '', content: '', category: '' };
    this.editingBlog = { _id: '', title: '', content: '', category: '' };
  }
}
