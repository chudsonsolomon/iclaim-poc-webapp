import { Component, OnInit,ReflectiveInjector } from '@angular/core';
import { MyMonitoringService } from './monitor.service';

import { UserService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor (
    private userService: UserService,
    private myMonitoringService: MyMonitoringService
  ) {
    const injector = ReflectiveInjector.resolveAndCreate([
    MyMonitoringService
  ]);
  this.myMonitoringService = injector.get(MyMonitoringService);
  }

  ngOnInit() {
    this.userService.populate();
    this.logNavigation();
  }
  private logNavigation() {
		this.myMonitoringService.logPageView();
	}

}
