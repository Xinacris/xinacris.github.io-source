import { Component, OnInit } from '@angular/core';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircle as faCircleSolid } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private http: HttpClient) {}
  faCircle = faCircle;
  faCircleSolid = faCircleSolid;
  skillsUrl = '../assets/skills.json';
  public skillPoints: any = [];
  ngOnInit(): void {
    this.http.get(this.skillsUrl).subscribe((res) => {
      this.skillPoints.push(res);
      console.log(this.skillPoints[0].skills);
    }),
      (err: any) => {
        console.log(err);
      };
  }
}
