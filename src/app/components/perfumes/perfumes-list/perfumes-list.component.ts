import { Component, OnInit } from '@angular/core';
import { Perfume } from 'src/modules/perfume.model';

@Component({
  selector: 'app-perfumes-list',
  templateUrl: './perfumes-list.component.html',
  styleUrls: ['./perfumes-list.component.css']
})
export class PerfumesListComponent implements OnInit {

  perfumes: Perfume[] = [
    {
      id: '1',
      name: 'Eros',
      brand: 'Versace'
    },
    {
      id: '2',
      name: 'Invictus',
      brand: 'Paco Rabanne'
    }

  ];
  constructor() { }

  ngOnInit(): void {
 
  }

}
