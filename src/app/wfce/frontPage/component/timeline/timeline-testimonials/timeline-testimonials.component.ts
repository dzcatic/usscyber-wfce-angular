import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-timeline-testimonials',
  templateUrl: './timeline-testimonials.component.html',
  styleUrls: ['./timeline-testimonials.component.scss'],
  animations: [
    trigger('widthTrigger', [
      state('in', style({transform: 'translateX(0%)'})),
      transition(':enter', [
        style({ transform: 'translateX({{from_x}})'}),
        animate('1s ease-in-out')
      ]),
      transition(':leave', [
        animate('1s ease-in-out', style({transform: "translateX({{to_x}})"}))
      ])
    ])]
})
export class TimelineTestimonialsComponent implements OnInit {

  inViewPort: boolean;
  justifyLeft: boolean = false;
  public testimonial;
  private activeIndex: number = 0;
  private activeTestimonialIndex: number = 0;
  private nextTestimonialIndex: number = 1;
  public fromX: string = "100%";
  public toX: string = "-100%";
  public activeTestimonials = [];
  public testimonials = [
    { 
      words:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      signature: "0 Testimonial by someone"
    },
    { 
      words:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      signature: "1 Testimonial by someone else"
    },
    { 
      words:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      signature: "2 Testimonial by someone totally new"
    },
    { 
      words:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      signature: "3 Testimonial by someone like totally new"
    }

  ];

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.activeTestimonials = this.testimonials.slice(0, 2);
  }

  @HostListener('document:scroll', ['$event'])
  onScroll(event) {
    let rect = this.elementRef.nativeElement.getBoundingClientRect();
    //if(!this.inViewPort){
      this.inViewPort = this.elementInViewport(rect);
    //}
    
  }

  private elementInViewport(rect) {

    if (rect.top > 0) {
      return (
        rect.top < (window.pageYOffset + window.innerHeight) &&
        (window.innerHeight - rect.top > rect.height / 2)
      );
    }
    else {
      return (
        rect.top < (window.pageYOffset + window.innerHeight) &&
        (rect.top + rect.height) > rect.height / 2
      );
    }
  }

  /* oneBackTestimonial(){
    setTimeout(()=>{
      let temp = this.activeIndex - 1;
    if(temp < 0){
      this.activeIndex = this.testimonials.length - 1;
      
    }
    else{
      this.activeIndex = temp;
      
    }
  },0)
    this.fromX = "-100%";
      this.toX = "100%";
  }

  oneForwardTestimonial(){
    setTimeout(()=>{
    let temp = this.activeIndex+ 1;
    if(temp > this.testimonials.length - 1){
    
      this.activeIndex = 0;
    }
      
    else{
      this.activeIndex = temp;
      
    }
  },0)
    this.fromX = "100%";
      this.toX = "-100%";
  } */

  
  /* oneBackTestimonial(){
    this.fromX = "-100%";
    this.toX = "100%";
    setTimeout(()=>{
      let lastIndex = this.testimonials.length - 1;
      let lastTestimonial = JSON.parse(JSON.stringify(this.testimonials[lastIndex]));
      this.removeElementFromTestimonials(lastIndex);
      this.testimonials.unshift(lastTestimonial);
    },0)
    
    
  }

  removeElementFromTestimonials(index){
    console.log(this.testimonials)
    if (index > -1) {
      this.testimonials.splice(index, 1);
    }
    console.log(this.testimonials)
  }

  oneForwardTestimonial(){
    this.fromX = "100%";
    this.toX = "-100%";
    setTimeout(()=>{
      let firstTestimonial = JSON.parse(JSON.stringify(this.testimonials[this.activeIndex]));
      this.removeElementFromTestimonials(this.activeIndex);
      this.testimonials.push(firstTestimonial);
    },0)
    
  } */

  oneBackTestimonial(){
    this.fromX = "-100%";
    this.toX = "100%";
    this.justifyLeft = true;
    //this.nextTestimonialIndex = this.activeTestimonialIndex;
    this.activeTestimonialIndex = this.previousIndex(this.activeTestimonialIndex);
    let nextIndex = this.nextIndex(this.activeTestimonialIndex);
    //console.log(this.activeTestimonialIndex)
    //console.log(this.activeTestimonials)
    setTimeout(()=>{
      let lastIndex = this.activeTestimonials.length - 1;
      let lastTestimonial = JSON.parse(JSON.stringify(this.testimonials[this.activeTestimonialIndex]));
      let firstTestimonial = this.testimonials[nextIndex];
      this.removeElementFromTestimonials(lastIndex);
      this.activeTestimonials = [];
      this.activeTestimonials.push(firstTestimonial);
      this.activeTestimonials.unshift(lastTestimonial);
    },0)
    
    
  }

  private nextIndex(index){
    let temp = index + 1;
    if(temp > this.testimonials.length - 1){
      temp = 0;
    }
    return temp;
  }


  private previousIndex(index){
    let temp = index - 1;
    if(temp < 0){
      temp = this.testimonials.length - 1;
    }
    return temp;
  }

  private removeElementFromTestimonials(index){
    if (index > -1) {
      this.activeTestimonials.splice(index, 1);
    }
  }

  oneForwardTestimonial(){
   
    this.fromX = "100%";
    this.toX = "-100%";
    this.justifyLeft = false;
    this.activeTestimonialIndex = this.nextIndex(this.activeTestimonialIndex);
    //this.nextTestimonialIndex = this.nextIndex(this.nextTestimonialIndex);
    let nextIndex = this.nextIndex(this.activeTestimonialIndex);
    
    setTimeout(()=>{
      let firstTestimonial = JSON.parse(JSON.stringify(this.testimonials[nextIndex]));
      this.removeElementFromTestimonials(this.activeIndex);
      this.activeTestimonials.push(firstTestimonial);
    },0)
    
  }

  setTestimonial(index){
    if(this.activeTestimonialIndex < index){
      this.activeTestimonialIndex = this.previousIndex(index);
      this.removeElementFromTestimonials(1);
      this.activeTestimonials.push(this.testimonials[index]);
      this.oneForwardTestimonial();
    }
    if(this.activeTestimonialIndex > index){
      this.activeTestimonialIndex = this.nextIndex(index);
      this.oneBackTestimonial();
    }
  }
}
