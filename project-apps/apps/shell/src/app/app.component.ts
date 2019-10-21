import { Component } from '@angular/core';
import { UserService } from '@project-apps/shared';

@Component({
  selector: 'project-apps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';
  user: any;

  constructor(
    private userService: UserService,
  ) {
    this.userService.set('test');
    this.user = this.userService.get();
  }

}
