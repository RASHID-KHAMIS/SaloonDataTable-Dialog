import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SaloonService } from 'src/app/Services/saloon.service';

@Component({
  selector: 'app-view-saloon',
  templateUrl: './view-saloon.component.html',
  styleUrls: ['./view-saloon.component.css']
})
export class ViewSaloonComponent implements OnInit {

  saloonList:any[]=[];
  constructor(private saloonService:SaloonService,private router:Router){}

  ngOnInit(): void {
   this.fetchAllSaloonList();
  }
  fetchAllSaloonList() {
    this.saloonService.getAll().subscribe((response:any)=>{
      console.log("available saloon =>",response);

      this.saloonList=response;
    })
  }

  onAddSaloon(){
    this.router.navigateByUrl("/add-saloon")
  }

  onEdit(saloon:any){
    this.router.navigateByUrl('/edit-saloon/'+saloon.id);
  }

  onDelete(saloon:any){
    this.saloonService.delete(saloon.id).subscribe((response:any)=>{
      this.ngOnInit();
    })
  }

}
