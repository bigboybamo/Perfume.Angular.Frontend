import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPerfumeComponent } from './components/perfumes/add-perfume/add-perfume.component';
import { EditPerfumeComponent } from './components/perfumes/edit-perfume/edit-perfume.component';
import { PerfumesListComponent } from './components/perfumes/perfumes-list/perfumes-list.component';

const routes: Routes = [
  {
    path:'',
    component: PerfumesListComponent
  },
  {
    path:'perfumes',
    component: PerfumesListComponent
  },
  {
    path: 'perfumes/add',
    component: AddPerfumeComponent
  },
  {
    path: 'perfumes/edit/:id',
    component: EditPerfumeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
