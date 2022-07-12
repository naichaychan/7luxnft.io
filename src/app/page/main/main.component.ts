import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit,AfterViewInit  {
  
  @ViewChild('btnNext') button: any;
  loadComplete = false;
  data_team = [
    {
      img:'/assets/home/pic/Team-Captain.webp',
      name:'RD.TONY',
      position:'CO-FOUNDER/CEO'
    },
    {
      img:'/assets/home/pic/Team-PS-Narumi.webp',
      name:'PS.NARUMI',
      position:'CO-FOUNDER'
    },
    {
      img:'/assets/home/pic/Team-Phield.webp',
      name:'NC.PHIELD',
      position:'PROJECT MANAGER'
    },
    {
      img:'/assets/home/pic/Team-Tomy-j.webp',
      name:'J.TOMY',
      position:'CONCEPT DESIGNER'
    },
    {
      img:'/assets/home/pic/Team-AngeryChan.webp',
      name:'ANGERRY CHAN',
      position:'ILLUSTRATOR'
    },
    {
      img:'/assets/home/pic/Team-DO.webp',
      name:'MATHANO',
      position:'MOTION DESIGNER'
    },
    {
      img:'/assets/home/pic/Team-PP-Virginia.webp',
      name:'PP.VIRGINIA',
      position:'CONTENT WRITER'
    },
    {
      img:'/assets/home/pic/Team-Jelly.webp',
      name:'JELLY',
      position:'SOCIAL MEDIA SPECIALIST'
    },
    {
      img:'/assets/home/pic/Team-Alice.webp',
      name:'ALICE',
      position:'COMMUNITY MANAGER'
    },
    {
      img:'/assets/home/pic/Team-BD.Billy.webp',
      name:'BD.BILLY',
      position:'WEB DEVELOPER'
    },
    {
      img:'/assets/home/pic/Team-TMnate.2.webp',
      name:'TM.NATE',
      position:'MARKETING MANAGER'
    },
    {
      img:'/assets/home/pic/Team-Flynnv-2.webp',
      name:'PN.FLYNN',
      position:'MARKETING COMMUNICATION'
    },
    {
      img:'/assets/home/pic/Team-Brownv-2.webp',
      name:'BROWN',
      position:'MARKETING STRATEGIST'
    },
    {
      img:'/assets/home/pic/Team-Woody.webp',
      name:'S.WOODY',
      position:'LAWYER'
    },
    {
      img:'/assets/home/pic/Team-Seng.webp',
      name:'DM.SENG',
      position:'LAWYER'
    }
  ]
  config: any;
  fullpage_api: any;

  constructor() {

    // for more details on config options please visit fullPage.js docs
    this.config = {
      // fullpage options
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'lastPage'],
      menu: '#menu',
      navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'lastPage'],
      showActiveTooltip: true,
      slidesNavigation: true,
      slidesNavPosition: 'bottom',
      scrollOverflow: true,
      // scrollOverflowMacStyle: false,
      // scrollOverflowReset: false,
      // fullpage callbacks
      afterResize: () => {
        console.log("After resize");
      },
      afterLoad: (origin: { index: any; }, destination: any, direction: any) => {
        console.log(origin.index);
      }
    };
  }

  getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }
  ngOnInit(): void {
    setInterval(()=>{this.button.nativeElement.click()},2500)
  }
  ngAfterViewInit(){
    setTimeout(() => {
      this.loadComplete = true;
    }, 2500);
  }
  scroll(el: HTMLElement) {
    console.log(el);
    const yOffset = -100;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
    // el.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
  goToLink(url: string){
    window.open(url, "_blank");
  }
}