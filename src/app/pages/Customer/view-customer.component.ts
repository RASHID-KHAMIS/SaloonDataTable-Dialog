import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  loading:boolean=false;
  customerList:any []=[];
  constructor(private customerService:CustomerService,
    private router:Router){}


  ngOnInit(): void {
    this.fetchAllCustomers();
  }

  fetchAllCustomers(){
    this.loading=true;
    this.customerService.getAll().subscribe((response:any)=>{
      //console.log("list of customers =>",response);
      this.customerList=response;
      this.loading=false;
    })
  }

  onAddCustomer(){
    this.router.navigateByUrl('create-customer')
  }

  onEdit(customer:any){
    // console.log("customer hawa hapa =>",customer);
    this.router.navigateByUrl("/edit-customer/"+customer.id);
  }

  onDelete(customer:any){
    this.customerService.delete(customer.id).subscribe((response:any)=>{
      this.ngOnInit();
    })
  }

}
