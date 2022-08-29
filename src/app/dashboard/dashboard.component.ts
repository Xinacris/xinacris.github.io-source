import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  url = 'https://api.github.com/users/xinacris';
  constructor(private http: HttpClient) {}
  public posts: any = [];
  ngOnInit(): void {
    this.http.get(this.url).subscribe((res) => {
      this.posts.push(res);
      console.log(this.posts);
    }),
      (err: any) => {
        console.log(err);
      };

  }
}
