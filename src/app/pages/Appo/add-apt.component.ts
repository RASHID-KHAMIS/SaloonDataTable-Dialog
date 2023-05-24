import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/Services/appointment.service';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-add-apt',
  templateUrl: './add-apt.component.html',
  styleUrls: ['./add-apt.component.css']
})
export class AddAptComponent implements OnInit {

  appoForm!: FormGroup;
  customers:any;
  customer_data:any;
  constructor(private customerService: CustomerService,
    private appoService:AppointmentService,
    private router: Router) { }


  ngOnInit(): void {
    this.configurationAppoForm();

    this.fetchCustomer();
  }

  configurationAppoForm() {
    this.appoForm = new FormGroup({
      appointmentDate: new FormControl(null),
      // id: new FormControl(null),
    })
  }


  fetchCustomer() {
    this.customerService.getAll().subscribe((response: any) => {
      this.customers=response;
    })
  }

  getCustomer(event:any){
    this.customerService.getById(event).subscribe((output:any)=>{ 
      this.customer_data = output;
    });
  }

  onBack() {
    this.router.navigateByUrl('/view-apt');
  }

  onSave() {
    const values = this.appoForm.value;
    console.log("cus=>",values);

    // this.appoService.add(values).subscribe((respose:any)=>{
    //   console.log("done =>",respose);
    // })
  }

}
