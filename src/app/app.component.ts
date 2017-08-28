// Section 1
//    Import
import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
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
export class AppComponent {

    public constructor(private titleService: Title ) { }
    
    public setTitle( newTitle: string) {
      this.titleService.setTitle( newTitle );
    }
    
    // constructor(private kongService:KongService){
        
    // }
        
    // ngOnInit(){
    //   console.log(this.kongService.cars)
    // }

    title = 'Para CMS';    

 }