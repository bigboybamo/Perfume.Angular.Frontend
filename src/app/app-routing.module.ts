import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfumesListComponent } from './components/perfumes/perfumes-list/perfumes-list.component';

const routes: Routes = [
  {
    path:'',
    component: PerfumesListComponent
  },
  {
    path:'perfumes',
    component: PerfumesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
