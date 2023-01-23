import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// router == current url
export class AppComponent {
  
  constructor(public router: Router) {} // private = gets url only from js // public = gets url from any (html, js...) 


}
