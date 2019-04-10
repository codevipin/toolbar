import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  onKeyUp(event:any) {
  	console.log(event.keyCode)
  }

}
