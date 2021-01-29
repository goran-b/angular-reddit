import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  addArticle(title:HTMLInputElement, link:HTMLInputElement){
    console.log("Title",title.value,"\n link:",link.value)
    return false;
  }
}
