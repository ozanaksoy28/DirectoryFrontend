import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Person } from 'src/app/models/person';
import { PersonFormComponent } from '../person-form/person-form.component';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private dialog : MatDialog
    ) { }

  ngOnInit(): void {
  }
  openUpdateForm(){
    console.log("ü")
    this.dialog.open(PersonFormComponent,{
      width:"400px",
    })
  }
}
