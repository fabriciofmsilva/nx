import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Route } from '@angular/router';
import { SharedModule } from '@project-apps/shared';

const routes: Route[] = [
  {
    path: 'feature-one',
    loadChildren: () => import('../../../feature-one/src/app/app.module').then(m => m.AppModule),
  },
  {
    path: 'feature-two',
    loadChildren: () => import('../../../feature-two/src/app/app.module').then(m => m.AppModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
