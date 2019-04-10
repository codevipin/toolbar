import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';

import { ToolbarService } from '../../services/toolbar.service';

import { AddComponentDirective } from '../../directives/add-component.directive';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
	
	toolbarItems: any;
	@ViewChild(AddComponentDirective) addComponent: AddComponentDirective;
	constructor(
		private toolbarService: ToolbarService,
		private componentFactoryResolver: ComponentFactoryResolver
	) { }

	ngOnInit() {
		this.toolbarItems = this.toolbarService.getToolbarItems();
	}

	ngAfterViewInit() {
		this.loadToolbarItems();
	}

	loadToolbarItems() {
		this.toolbarItems.map(item => {

			let componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);
	console.log(this.addComponent);
			let viewContainerRef = this.addComponent.containerRef
			// viewContainerRef.clear();

			let componentRef = viewContainerRef.createComponent(componentFactory);
		})
		// (<AdComponent>componentRef.instance).data = adItem.data;
	}
}
