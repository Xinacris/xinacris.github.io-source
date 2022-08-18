import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  @Input() isHidden=false;
  ngOnInit(): void {}
  showMenu(){
    this.isHidden=!this.isHidden;
  }
  hideMenu() {
    this.isHidden = false;
  }
}
