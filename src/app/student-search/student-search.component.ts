import { Component } from '@angular/core';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent {
AmissionNo=""
search=()=>
{
  let sear:any={"AmissionNo":this.AmissionNo}
  console.log(sear)
}
}
