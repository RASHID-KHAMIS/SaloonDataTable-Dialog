import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  empEditForm!:FormGroup;
  constructor(private employeeService:EmployeeService,
    private router:Router,
    private route:ActivatedRoute){}


  ngOnInit(): void {
   this.configureEmpEditForm(); 

   this.route.params.subscribe((paramValue:any)=>{
    console.log("passed params =>",paramValue)

    const emp = paramValue.employeeId;
    this.fetchEmployeeById(emp);
   })
  }

  configureEmpEditForm(){
    this.empEditForm= new FormGroup({
      id:new FormControl(null),
      firstName:new FormControl(null,[Validators.required]),
      lastName:new FormControl(null,[Validators.required]),
      phoneNumber:new FormControl(null,[Validators.required]),
      city:new FormControl(null,[Validators.required]),
      gender:new FormControl(null,[Validators.required]),
      role:new FormControl(null,[Validators.required]),

    })
  }

  fetchEmployeeById(employeeId:any){
    this.employeeService.getById(employeeId).subscribe((response:any)=>{
      console.log("get item by Id =>",response);

      // this.empEditForm.get('id')?.setValue(response.id);
      // this.empEditForm.get('firstName')?.setValue(response.firstName);

      Object.keys(response).forEach(key =>{
        if(this.empEditForm.value.hasOwnProperty(key)){
          this.empEditForm.get(key)?.setValue(response[key]);
          console.log("key response id =>",response);
        }
      },(error:HttpErrorResponse)=>{
        console.log("error =>",error);
      })
    })
  }



  onSave(){
    const id = this.empEditForm.value.id;
    const values = this.empEditForm.value;

    this.employeeService.update(id,values).subscribe((employee:any)=>{
      this.router.navigateByUrl('/view-employee')
    })

  }

  onBack(){
    this.router.navigateByUrl('/view-employee');
  }

}
