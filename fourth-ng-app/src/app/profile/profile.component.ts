import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  userName: string | null = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    // let name = this.route.snapshot.paramMap.get('name');
    // this.userName = name;
    // console.log(name);
    // this.route.queryParams.subscribe((params) => {
    //   this.userName = params['name'];
    //   console.log(params['name']);
    // });
    this.route.data.subscribe((data) => {
      this.userName = data['name'];
      console.log(data['name']);
    });
  }
}
