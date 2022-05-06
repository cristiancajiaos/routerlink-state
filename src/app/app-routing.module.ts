import { RoutedComponent } from './routed/routed.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'routed-button', component: RoutedComponent },
  { path: 'routed-anchor', component: RoutedComponent },
  { path: 'routed-navigate', component: RoutedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
