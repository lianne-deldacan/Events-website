import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {
  categories: any[] = [];
  newCategoryName: string = '';
  showCreateModal: boolean = false; // Track modal visibility

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.getCategories();
  }

  // Fetch categories from API
  getCategories() {
    this.categoriesService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  // Open Create Modal
  openCreateModal() {
    this.newCategoryName = ''; // Clear input
    this.showCreateModal = true;
  }

  // Close Create Modal
  closeCreateModal() {
    this.showCreateModal = false;
  }

  // Add a new category
  addCategory() {
    if (!this.newCategoryName.trim()) {
      alert('Category name is required!');
      return;
    }

    const newCategory = { name: this.newCategoryName };

    this.categoriesService.createCategory(newCategory).subscribe(() => {
      alert('Category added successfully!');
      this.getCategories(); // Refresh categories after adding
      this.closeCreateModal(); // Close the modal
    });
  }

  deleteCategory(id: string) {
    const confirmDelete = confirm("Are you sure you want to delete this category?");
    if (confirmDelete) {
      this.categoriesService.deleteCategory(id).subscribe(
        () => {
          alert('Category deleted successfully!');
          this.getCategories(); // Refresh the list
        },
        (error) => {
          console.error('Error deleting category:', error.message);
          alert('Failed to delete category!');
        }
      );
    }
  }

  editCategory(category: any) {
    const newName = prompt('Edit Category Name:', category.name);
    if (newName && newName.trim()) {
      const updatedCategory = { ...category, name: newName.trim() };
      this.categoriesService.updateCategory(category._id, updatedCategory).subscribe(
        () => {
          alert('Category updated successfully!');
          this.getCategories(); // Refresh the list
        },
        (error) => {
          console.error('Error updating category:', error.message);
          alert('Failed to update category!');
        }
      );
    } else {
      alert('Category name is required to update!');
    }
  }
}
