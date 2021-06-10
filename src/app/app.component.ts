import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'valorant-chatcolor';
  constructor() {
    this.loadScripts();
  }
  loadScripts() {
    let colors = [
      '<warning>',
      '<enemy>',
      '<team>',
      '<notification>',
      '<system>',
    ]
    
    
    function rainbow(){
      var colorThis = (<HTMLInputElement>document.getElementById('input')).value;
      var j = 0;
      var ret = "";
      for(var i = 0; i < colorThis.length; i++){
          if(colorThis.charAt(i) != ' '){
              if(j < 5) {// colors
                  ret = ret.concat(colors[j]);
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
      console.log(ret);
     (<HTMLInputElement>document.getElementById("output")).innerText = ret;
    }
    
  }
}

