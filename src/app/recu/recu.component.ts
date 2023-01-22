import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-recu',
  templateUrl: './recu.component.html',
  styleUrls: ['./recu.component.scss']
})
export class RecuComponent {
  downloadImage(canvas: HTMLCanvasElement) {
    const link = document.createElement('a');
    link.download = 'image.png';
    link.href = canvas.toDataURL();
    link.click();
  }
  capture() {
    const element = document.getElementById('rcu');
    html2canvas(element).then(canvas => {
        // the canvas object contains the image
        this.downloadImage(canvas);
    });
  }
  

  // convertToImage() {
  //   var element = document.getElementById("a4");
  //   html2canvas(element).then(canvas => {
  //       // Convert the canvas to blob
  //       canvas.toBlob(function(blob){
  //           // To download directly on browser default 'downloads' location
  //           let link = document.createElement("a");
  //           link.download = "image.png";
  //           link.href = URL.createObjectURL(blob);
  //           link.click();

  //           // To save manually somewhere in file explorer
  //           window.saveAs(blob, 'image.png');

  //       },'image/png');
  //   });
  // }
}
