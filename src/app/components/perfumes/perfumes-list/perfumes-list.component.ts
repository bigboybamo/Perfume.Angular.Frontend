import { Component, OnInit } from '@angular/core';
import { PerfumesService } from 'src/app/services/perfumes.service';
import { Perfume } from 'src/modules/perfume.model';

@Component({
  selector: 'app-perfumes-list',
  templateUrl: './perfumes-list.component.html',
  styleUrls: ['./perfumes-list.component.css']
})
export class PerfumesListComponent implements OnInit {

  perfumes: Perfume[] = [];
  constructor(private perfumeservice: PerfumesService) { }

  ngOnInit(): void {
  this.perfumeservice.getAllPerfumes().subscribe({
    next: (perfumes) => {
      this.perfumes = perfumes;
    },
    error: (response) =>{
      console.log(response);
    }
  });
  }

}
