import { Component, OnInit } from '@angular/core';
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
}
