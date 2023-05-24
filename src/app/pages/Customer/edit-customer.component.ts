import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  custEditForm!:FormGroup;
  constructor(private customerService:CustomerService,
    private router:Router,
    private route:ActivatedRoute){}

  ngOnInit(): void {
  this. configurecustEditForm();

  this.route.params.subscribe((paramValue:any)=>{
    //console.log("param Value =>",paramValue);

    const cust = paramValue.customerId;
    this.fetchCustomerById(cust);
  })
  }

  configurecustEditForm(){
    this.custEditForm = new FormGroup({
      id:new FormControl(null),
      firstName:new FormControl(null,[Validators.required]),
      lastName:new FormControl(null,[Validators.required]),
      phoneNumber:new FormControl(null,[Validators.required]),
      street:new FormControl(null,[Validators.required]),
      city:new FormControl(null,[Validators.required]),
      state:new FormControl(null),
      zipCode:new FormControl(null),
      gender:new FormControl(null,[Validators.required]),

    })
  }

  onSave(){
    const id=this.custEditForm.value.id;
    const values=this.custEditForm.value;
    

    this.customerService.update(id,values).subscribe((response)=>{
      //console.log("hizi=>",response)
      this.onBack();
    })
  }

  fetchCustomerById(customerId:any){
    this.customerService.getById(customerId).subscribe((response:any)=>{
     
      console.log("customer response =>",response);

      Object.keys(response).forEach(key=>{
        if(this.custEditForm.value.hasOwnProperty(key)){
          this.custEditForm.get(key)?.setValue(response[key]);
        }
      },(error:HttpErrorResponse)=>{
        console.log("error =>",error);
      })

     
    }) 
  }

  onBack(){
    this.router.navigateByUrl('/view-customer');
  }

}
