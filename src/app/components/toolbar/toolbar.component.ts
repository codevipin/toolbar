import { Component, OnInit } from '@angular/core';

import { UploadComponent } from '../utils/upload/upload.component';
import { SearchComponent } from '../utils/search/search.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
