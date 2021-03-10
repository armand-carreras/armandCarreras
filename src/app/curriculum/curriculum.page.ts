import { Component, OnInit, Renderer2 } from '@angular/core';
import { IonToggle } from '@ionic/angular';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.page.html',
  styleUrls: ['./curriculum.page.scss'],
})
export class CurriculumPage implements OnInit {
  images={
    profile:"https://raw.githubusercontent.com/armand-carreras/myProfile/main/IMG-20140525-WA0001.jpg",
    html:"https://raw.githubusercontent.com/armand-carreras/armandCarreras/master/src/assets/html.png",
    css:"https://raw.githubusercontent.com/armand-carreras/armandCarreras/master/src/assets/css.png",
    js:"https://raw.githubusercontent.com/armand-carreras/armandCarreras/master/src/assets/js.png",
    angular:"https://raw.githubusercontent.com/armand-carreras/armandCarreras/master/src/assets/angular.png",
    ionic:"https://raw.githubusercontent.com/armand-carreras/armandCarreras/master/src/assets/ionic.png",
    cc:"https://raw.githubusercontent.com/armand-carreras/armandCarreras/master/src/assets/c%2B%2B.png",
    cccc:"https://raw.githubusercontent.com/armand-carreras/armandCarreras/master/src/assets/c%23.png",
    firebase:"https://raw.githubusercontent.com/armand-carreras/armandCarreras/master/src/assets/firebase.png",
    aws:"https://raw.githubusercontent.com/armand-carreras/armandCarreras/master/src/assets/aws.png",
    java:"https://raw.githubusercontent.com/armand-carreras/armandCarreras/master/src/assets/java.png",
    json:"https://raw.githubusercontent.com/armand-carreras/armandCarreras/master/src/assets/json.png",
    npm:"https://raw.githubusercontent.com/armand-carreras/armandCarreras/master/src/assets/npm.png",
    mongo:"https://raw.githubusercontent.com/armand-carreras/armandCarreras/master/src/assets/mongodb.png",
    python:"https://raw.githubusercontent.com/armand-carreras/armandCarreras/master/src/assets/python.png",
    git:"https://raw.githubusercontent.com/armand-carreras/armandCarreras/master/src/assets/Git_icon.png"
  }

  toggleFlag=false;
  constructor(private renderer: Renderer2) {
    this.renderer.setAttribute(document.body,'color-theme','dark');
  }

  ngOnInit() {

  }
  changeTheme(event){
    this.toggleFlag = !this.toggleFlag;
    console.log(this.toggleFlag);
    console.log(event.detail.checked);
    if(!event.detail.checked){
      this.renderer.setAttribute(document.body,'color-theme','dark')
    }
    else{
      this.renderer.setAttribute(document.body,'color-theme','light')
    }
  }

  chargeImages(){

  }

}
