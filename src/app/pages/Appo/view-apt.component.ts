import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/Services/appointment.service';

@Component({
  selector: 'app-view-apt',
  templateUrl: './view-apt.component.html',
  styleUrls: ['./view-apt.component.css']
})
export class ViewAptComponent implements OnInit {

  appoList:any []=[];
  constructor(private appoService:AppointmentService,
    private router:Router){}


  ngOnInit(): void {
    this.fetchAllAppo();
  }


  fetchAllAppo(){
    this.appoService.getAll().subscribe((response:any)=>{
      console.log("appo response =>",response)
       this.appoList=response;
    })
  }

  onAddApt(){
    this.router.navigateByUrl('/add-apt')
  }

}
