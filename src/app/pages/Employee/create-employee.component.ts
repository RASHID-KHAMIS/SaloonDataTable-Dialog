import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit{

  employeeForm!:FormGroup;
  constructor(private employeeService:EmployeeService,private router:Router){}

  ngOnInit(): void {
    this.configureEmployeeForm();
  }

  configureEmployeeForm(){
    this.employeeForm=new FormGroup({
      firstName:new FormControl(null,[Validators.required]),
      lastName:new FormControl(null,[Validators.required]),
      phoneNumber:new FormControl(null,[Validators.required]),
      city:new FormControl(null,[Validators.required]),
      gender:new FormControl(null,[Validators.required]),
      role:new FormControl(null,[Validators.required]),
    })
  }

  onSave(){
    const values = this.employeeForm.value;
    console.log("employee form values =>",values);

    this.employeeService.add(values).subscribe((response:any)=>{
      // console.log("create employee response =>",response);
      this.onBack();
    },((error:HttpErrorResponse)=>{
      console.log(error);
    })
    )

  }

  onBack(){
    this.router.navigateByUrl('view-employee');
  }

}
