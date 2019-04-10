import { Injectable } from '@angular/core';

import { UploadComponent } from '../components/utils/upload/upload.component';
import { SearchComponent } from '../components/utils/search/search.component';
import { InsertNewComponent } from '../components/utils/insert-new/insert-new.component';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

	toolbarItems = [
		{
			component: UploadComponent,
			key: 'upload',
			name: 'Upload'
		},
		{
			component: SearchComponent,
			key: 'search',
			name: 'Search'
		},
		{
			component: InsertNewComponent,
			key: 'new',
			name: 'New'
		},

	];
	constructor() { }

	getToolbarItems() {
		return this.toolbarItems;
	}
}
