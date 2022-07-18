import { Component, OnDestroy, OnInit } from '@angular/core';
import { timer } from 'rxjs';

const slider_active = "slide active";
const slider_not_active = "slide";

let index = 0;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor() { }


  ngOnInit(): void {
  }

  public activeSlide(n: number) {
    let slides = Array.from(document.querySelectorAll('.slide'));
    for (let i in slides) {
      slides[i].classList.remove('active');
    }
    slides[n].classList.add('active');
  }

  public activeDot(n: number) {
    let dots = Array.from(document.querySelectorAll('.dot'));
    for (let i in dots) {
      dots[i].classList.remove('active');
    }
    dots[n].classList.add('active');
  }

  public nextSlide() {
    var slides = document.querySelectorAll('.slide')
    if (index == slides.length - 1) {
      index = 0;
      this.activeSlide(index);
      this.activeDot(index);
    }
    else {
      index++;
      this.activeSlide(index);
      this.activeDot(index);
    }
  }

  public prevSlide() {
    var slides = document.querySelectorAll('.slide')
    if (index == 0) {
      index = slides.length - 1;
      this.activeSlide(index);
      this.activeDot(index);
    }
    else {
      index--;
      this.activeSlide(index);
      this.activeDot(index);
    }
  }

  public changeSlide(n: number) {
    index=n;
    this.activeSlide(index);
    this.activeDot(index);
  }
}

