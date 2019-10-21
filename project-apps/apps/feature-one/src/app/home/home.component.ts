import { Component, OnInit } from '@angular/core';
import { UserService } from '@project-apps/shared';

@Component({
  selector: 'project-apps-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: any;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.user = this.userService.get();
  }

}
