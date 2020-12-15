import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooklistComponent } from './booklist/booklist.component';


const routes: Routes = [
  {
    path: 'list',
    pathMatch: 'full',
    component: BooklistComponent,
  },
  {
    path: 'aboutus',
    pathMatch: 'full',
    component: AboutUsComponent,
  },
  {
    path: 'bookDetails/:isbn',
    pathMatch: 'full',
    component: BookDetailsComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
