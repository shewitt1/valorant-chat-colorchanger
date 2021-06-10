import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'valorant-chatcolor';
  public colors: string[];

  constructor() {
    this.colors = [];
    this.loadScripts();
  }
  loadScripts() {
    this.colors = [
      '<warning>',
      '<enemy>',
      '<team>',
      '<notification>',
      '<system>',
    ]
  }
 
red(){
    var colorThis = (<HTMLInputElement>document.getElementById('input')).value;
    var ret = "<enemy>" + colorThis + "</>";
   (<HTMLInputElement>document.getElementById("output")).innerText = ret;
}

blue(){
    var colorThis = (<HTMLInputElement>document.getElementById('input')).value;
    var ret = "<team>" + colorThis + "</>";
   (<HTMLInputElement>document.getElementById("output")).innerText = ret;
}

yellow(){
    var colorThis = (<HTMLInputElement>document.getElementById('input')).value;
    var ret = "<system>" + colorThis + "</>";
   (<HTMLInputElement>document.getElementById("output")).innerText = ret;
}

green(){
    var colorThis = (<HTMLInputElement>document.getElementById('input')).value;
    var ret = "<notification>" + colorThis + "</>";
   (<HTMLInputElement>document.getElementById("output")).innerText = ret;
}

pink(){
    var colorThis = (<HTMLInputElement>document.getElementById('input')).value;
    var ret = "<warning>" + colorThis + "</>";
   (<HTMLInputElement>document.getElementById("output")).innerText = ret;
}

/*random(){
    var colorThis = (<HTMLInputElement>document.getElementById('input')).value;
    var ret = "";
    for(var i = 0; i < colorThis.length; i++){
        if(colorThis.charAt(i) != ' '){
            rand = Math.floor(Math.random() * 5);
            if(rand < 5) {
                ret = ret.concat(colors[rand]);
                ret = ret.concat(colorThis.charAt(i));
                ret = ret.concat("</>");
            }else{
                ret = ret.concat(colorThis.charAt(i));
            }
        }else{
            ret = ret.concat(' ');
        }
      }
   (<HTMLInputElement>document.getElementById("output")).innerText = ret;
}*/
  rainbow() {
    var colorThis = (<HTMLInputElement>document.getElementById('input')).value;
    var j = 0;
    var ret = "";
    for(var i = 0; i < colorThis.length; i++){
        if(colorThis.charAt(i) != ' '){
            if(j < 5) {// colors
                ret = ret.concat(this.colors[j]);
                ret = ret.concat(colorThis.charAt(i));
                ret = ret.concat("</>");
                j++;
            }else{// white
                ret = ret.concat(colorThis.charAt(i));
                j = 0;
            }
        }else{// disregard white space
            ret = ret.concat(' ');
        }
    }

   (<HTMLInputElement>document.getElementById("output")).innerText = ret;
  }

}


