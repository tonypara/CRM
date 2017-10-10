// Section 1
//    Import
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Http, Response } from '@angular/http';
import { KongService } from './kong.service';

// Section 2
//    Component Decorator
@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})

// Section 3
//    Component Class
//  export class AppComponent { }
export class AppComponent { // AppComponent 

  title = 'CRM-Dev Oauth Login';

  public oauth: KongService;
  // tslint:disable-next-line:one-line
  constructor(private titleService: Title){
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

} // AppComponent
