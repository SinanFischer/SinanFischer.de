import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images = ['img_1.jpg', 'img_2.jpg', 'img_3.jpg',]; 
  currentImage = 0; 
  showImage = true; 

  ngOnInit() {
    this.updateImage(); 
  }


  updateImage() {

    setInterval(() => {
      this.currentImage++; 
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false; 
      
      setTimeout(() => {
        this.showImage = true; 
      },10); 
    }, 8000); 
  }
}
