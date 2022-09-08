import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PerfumesService } from 'src/app/services/perfumes.service';
import { Perfume } from 'src/modules/perfume.model';

@Component({
  selector: 'app-add-perfume',
  templateUrl: './add-perfume.component.html',
  styleUrls: ['./add-perfume.component.css']
})
export class AddPerfumeComponent implements OnInit {

  form = new FormGroup({
    "Name": new FormControl("", Validators.required),
    "Brand": new FormControl("", Validators.required),
});

get f(): { [key: string]: AbstractControl } {
  return this.form.controls;
}
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
