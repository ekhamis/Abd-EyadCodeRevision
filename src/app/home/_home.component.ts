import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data = [
  { name: 'Udemy', password: 'Udemy123', url: 'https://www.udemy.com/' },
  { name: 'Couesrea', password: 'Couesrea123', url: 'https://www.coursera.com/' },
  { name: 'Edx', password: 'Edx123', url: 'https://www.edx.com/' },
];

add(webN, webP, webL){
  if (webN && webP) this.data.push({ name: webN, password: webP, url: webL });
}

remove(deleteE){
  this.data = this.data.filter(item => item.name !== deleteE);
}

edit(Ename,Epass,Eurl){
  console.log(Ename);
  for(let x of this.data){
    if (x.name === Ename){
      x.name = Ename;
      x.password = Epass;
      x.url = Eurl;
    }
  }
}

  constructor() { }

  ngOnInit() {
  }

}