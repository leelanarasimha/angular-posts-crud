import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './Categories/components/add-category/add-category.component';
import { CategoriesComponent } from './Categories/components/categories/categories.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'posts', component: PostsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'category/add', component: AddCategoryComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
