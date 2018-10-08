import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {
@ Input () img;
  noimg: string;
  picture: any;
  constructor() {
    this.noimg = '../assets/images/no imag.jpeg';
  }

  ngOnInit() {
    this.img ? this.picture = this.img : this.picture = this.noimg;
  }

}
