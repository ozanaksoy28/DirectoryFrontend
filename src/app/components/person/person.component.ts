import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonResponseModel } from 'src/app/models/personResponseModel';
import { PersonService } from 'src/app/services/person.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { PersonFormComponent } from '../person-form/person-form.component';
import { ActivatedRoute } from '@angular/router';
import { WarnFormComponent } from '../warn-form/warn-form.component';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  persons:Person[]=[];
  favPersons:Person[]=[];
  filterText="";
  personResponseModel : PersonResponseModel={
    data:this.persons,
    message: "",
    success:true 
  }

  constructor(private personService:PersonService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private dialog : MatDialog
    ) { }

  ngOnInit(): void {
    this.getPerson();
    this.getFav();
  }    
  getPerson(){
    this.personService.getPersons().subscribe(response => {
      this.persons = response.data
    })
  }
  getFav(){
    this.personService.getFavorites().subscribe(response => {
      this.favPersons = response.data;
    })
    
  }
   deletePerson(person:Person){
     this.personService.removePerson(person).subscribe()
     this.toastrService.success(person.name+" "+person.surname+" Silindi.")
     setTimeout(() => {window.open('http://localhost:4200/', '_self')},1000);
   }
  openUpdateForm(person : Person){
    
    this.dialog.open(PersonFormComponent,{
      width:"400px",
      data : person,
    })
  }
  changeFav(person : Person){
    
    if(person.fav == false){
      person.fav=true
      return this.personService.updatePerson(person).subscribe(),setTimeout(() => {window.open('http://localhost:4200/', '_self')},10);
    }else{
      person.fav=false
      return this.personService.updatePerson(person).subscribe(),setTimeout(() => {window.open('http://localhost:4200/', '_self')},10);
    }
  }
  openWarnForm(person : Person){
    this.dialog.open(WarnFormComponent,{
      width:"500px",
      data : person,
    })
  }
}

