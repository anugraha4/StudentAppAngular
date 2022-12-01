import { Component } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {
name=""
rollno=""
admno=""
mobile=""
collegename=""
parentname=""
parentphn=""
username=""
password=""

entry=()=>
{
  let add:any={"name":this.name,"rollno":this.rollno,"admno":this.admno,
"mobile":this.mobile,"collegename":this.collegename,"parentname":this.parentname,
"parentphn":this.parentphn,"username":this.username,"password":this.password


  }
  console.log(add)
}
}
