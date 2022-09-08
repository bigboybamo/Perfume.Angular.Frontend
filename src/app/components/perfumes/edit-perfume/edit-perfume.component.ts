import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfumesService } from 'src/app/services/perfumes.service';
import { Perfume } from 'src/modules/perfume.model';

@Component({
  selector: 'app-edit-perfume',
  templateUrl: './edit-perfume.component.html',
  styleUrls: ['./edit-perfume.component.css']
})
export class EditPerfumeComponent implements OnInit {

  perfumeDetails: Perfume = {
    id:'',
    name: '',
    brand:''
  };

  constructor(private route: ActivatedRoute, private perfumService: PerfumesService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) => {
    const id  =  params.get('id');
    if(id){
      this.perfumService.getPerfume(id)
      .subscribe({
        next: (response) => {
          this.perfumeDetails = response;
          
        }
      })
    }
      }
    })
  }

  updatePerfume(){
    this.perfumService.updatePerfume(this.perfumeDetails.id, this.perfumeDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['perfumes']);
      }
    })
  }

  deletePerfume(id: string){
    this.perfumService.deletePerfume(this.perfumeDetails.id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['perfumes']);
      }
    })
  }
}
