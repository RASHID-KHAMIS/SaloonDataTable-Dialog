import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit{


  loading:boolean=false;
  employeeList:any[]=[];
  constructor(private employeeService:EmployeeService,
    private router:Router){

  }
  ngOnInit(): void {
    this.fetchAllEmployee();
  }

  fetchAllEmployee(){
    this.loading=true;
    this.employeeService.getAll().subscribe((response:any)=>{
      // console.log("employee response =>",response);
      this.employeeList=response;
      this.loading=false;
    })
  }

  onAddEmployee(){
    this.router.navigateByUrl('/create-employee');
  }

  onEditEmployee(employee:any){
    this.router.navigateByUrl('/edit-employee/'+employee.id);
  }

  onDelete(employee:any){
console.log("log =>",employee);

this.employeeService.delete(employee.id).subscribe((response:any)=>{
  console.log("deleted =>",response);
  // this.router.navigate(["view-employee"]);
  this.ngOnInit();
})
  }

}
