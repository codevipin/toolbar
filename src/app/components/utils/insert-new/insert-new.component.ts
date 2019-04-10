import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insert-new',
  templateUrl: './insert-new.component.html',
  styleUrls: ['./insert-new.component.scss']
})
export class InsertNewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  insertNew( event:Event ) {
	event.preventDefault()
  	alert("Insert new item");
  }

}
