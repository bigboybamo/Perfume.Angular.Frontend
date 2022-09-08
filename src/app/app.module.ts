import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfumesListComponent } from './components/perfumes/perfumes-list/perfumes-list.component';
import { AddPerfumeComponent } from './components/perfumes/add-perfume/add-perfume.component';
import { FormsModule } from '@angular/forms';
import { EditPerfumeComponent } from './components/perfumes/edit-perfume/edit-perfume.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfumesListComponent,
    AddPerfumeComponent,
    EditPerfumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
