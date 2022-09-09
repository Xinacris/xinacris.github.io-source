import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  constructor(private http: HttpClient) {}
  expUrl = '../assets/experiences.json';
  public experiences: any = [];

  ngOnInit(): void {
    this.http.get(this.expUrl).subscribe((res) => {
      this.experiences.push(res);
      console.log(this.experiences[0].experiences);
    }),
      (err: any) => {
        console.log(err);
      };
  }
}
