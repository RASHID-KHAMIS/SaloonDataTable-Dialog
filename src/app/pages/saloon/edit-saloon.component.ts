import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SaloonService } from 'src/app/Services/saloon.service';

@Component({
  selector: 'app-edit-saloon',
  templateUrl: './edit-saloon.component.html',
  styleUrls: ['./edit-saloon.component.css']
})
export class EditSaloonComponent implements OnInit {

  saloonEditForm!:FormGroup;
  constructor(private saloonService:SaloonService,private router:Router,
    private route:ActivatedRoute){}

  ngOnInit(): void {
    this.configureSaloonEditForm();
    
    this.route.params.subscribe((paramValue:any)=>{
      // console.log("paramValue hizi =>",paramValue);

      const sal = paramValue.saloonId;
      this.fetchById(sal);
    })
  }

  configureSaloonEditForm() {
    this.saloonEditForm=new FormGroup({
      id:new FormControl(null),
      serviceName:new FormControl(null,[Validators.required]),
      serviceDuration:new FormControl(null,[Validators.required]),
      servicePrice:new FormControl(null,[Validators.required]),
      serviceMaterials:new FormControl(null,[Validators.required]),
      
    })
  }

  fetchById(saloonId:any){
    this.saloonService.getById(saloonId).subscribe((response:any)=>{
      // console.log("response by id =>",response);

      Object.keys(response).forEach(key =>{
        if(this.saloonEditForm.value.hasOwnProperty(key)){
          this.saloonEditForm.get(key)?.setValue(response[key]);
        }
      })
    })
  }


  onBack(){
    this.router.navigateByUrl('/view-saloon')
  }

  onSave(){
    const id =  this.saloonEditForm.value.id;
    const values = this.saloonEditForm.value;

    this.saloonService.update(id,values).subscribe((response:any)=>{
      //console.log("updated values =>",response);
      this.onBack();
    },(error:HttpErrorResponse)=>{
      console.log("error =>",error);
    })
  }
}
