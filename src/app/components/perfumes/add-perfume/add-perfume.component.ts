import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfumesService } from 'src/app/services/perfumes.service';
import { Perfume } from 'src/modules/perfume.model';

@Component({
  selector: 'app-add-perfume',
  templateUrl: './add-perfume.component.html',
  styleUrls: ['./add-perfume.component.css']
})
export class AddPerfumeComponent implements OnInit {

  addPerfumeRequest: Perfume = {
    id:'',
    name: '',
    brand:''
  };
  constructor(private perfumeService: PerfumesService, private router: Router) { }

  ngOnInit(): void {
  }
  //add perfume method
addPerfume(){
  this.perfumeService.addPerfume(this.addPerfumeRequest).subscribe({
    next:(perfume) =>{
      this.router.navigate(['perfumes']);
    }
  });
}
}
