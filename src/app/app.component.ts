import { Component, ViewChild } from '@angular/core';
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'proeject-intern';
  @ViewChild(HeaderComponent)
  childRef: HeaderComponent = new HeaderComponent();
  isHidden = false;
  onClick() {
    if (window.innerWidth < 992) {
      this.childRef.hideMenu();
    }
  }
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
}
