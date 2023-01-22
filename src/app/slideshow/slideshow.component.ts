import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit{ // onInit also needs added to "import Component" 


  images = ['img_1.jpg', 'img_2.jpg', 'img_3.jpg',]; 
  headlines = ['Bring enginnering to the next level', 'Born to code', 'Gratuated at Developer Akademie']
  currentImage = 2; 
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
