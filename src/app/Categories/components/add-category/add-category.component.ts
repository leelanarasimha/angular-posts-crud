import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  categoryForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    status: new FormControl('active'),
  });

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onAddCategory() {
    let category = this.categoryForm.value;
    this.categoryService.addCategory(category).subscribe((data) => {
      this.router.navigate(['/categories']);
    });
  }
}
