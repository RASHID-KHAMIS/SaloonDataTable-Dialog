import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customerForm!:FormGroup;
  constructor(private customerService:CustomerService,
    private router:Router){}

  ngOnInit(): void {
    this.configureCustomerForm();
  }

  configureCustomerForm(){
    this.customerForm=new FormGroup({
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
    const values = this.customerForm.value;
    //console.log("form hii =>",values);

    this.customerService.add(values).subscribe((response:any)=>{
      console.log("cust res =>",response);
      this.onBack();
    })
  }

  onBack(){
    this.router.navigateByUrl("/view-customer");
  }

}
