import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { UploadComponent } from './components/utils/upload/upload.component';
import { SearchComponent } from './components/utils/search/search.component';
import { InsertNewComponent } from './components/utils/insert-new/insert-new.component';

import { ToolbarService } from './services/toolbar.service';

import { AddComponentDirective } from './directives/add-component.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddComponentDirective,
    ToolbarComponent,
    UploadComponent,
    SearchComponent,
    InsertNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ToolbarService],
  bootstrap: [AppComponent],
  entryComponents: [
    UploadComponent,
    SearchComponent,
    InsertNewComponent
  ]
})
export class AppModule { }
