import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from '../../models/ICategory';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
})
export class EditCategoryComponent implements OnInit {
  categoryId: string = '';
  categoryForm = new FormGroup({
    title: new FormControl(''),
    status: new FormControl(''),
  });
  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.params['id'];
    this.categoryService.getCategoryById(this.categoryId).subscribe((data) => {
      this.categoryForm.setValue({
        title: data.title,
        status: data.status,
      });
    });
  }

  onUpdateCategory() {
    this.categoryService
      .updateCategory(this.categoryForm.value as ICategory, this.categoryId)
      .subscribe((data) => {
        this.router.navigate(['/categories']);
      });
  }
}
