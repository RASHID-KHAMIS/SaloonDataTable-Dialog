import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SaloonService } from 'src/app/Services/saloon.service';

@Component({
  selector: 'app-add-saloon',
  templateUrl: './add-saloon.component.html',
  styleUrls: ['./add-saloon.component.css']
})
export class AddSaloonComponent implements OnInit {

  salooForm!:FormGroup;
  constructor(private saloonService:SaloonService,private router:Router){


  }
  ngOnInit(): void {
    this.configureSaloonForm();
  }


  configureSaloonForm() {
    this.salooForm=new FormGroup({
      serviceName:new FormControl(null,[Validators.required]),
      serviceDuration:new FormControl(null,[Validators.required]),
      servicePrice:new FormControl(null,[Validators.required]),
      serviceMaterials:new FormControl(null,[Validators.required]),
      
    })
  }

  onSave(){
    const values=this.salooForm.value;
    console.log("hizi hapa =>",values);

    this.saloonService.add(values).subscribe((response:any)=>{
      //console.log("hizi hapa =>",response);
      this.router.navigateByUrl('/view-saloon')
    })
  }

  onBack(){
    this.router.navigateByUrl('view-saloon');
  }

}
