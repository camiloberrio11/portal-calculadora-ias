import { SharedModule } from './../../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxLoadingModule.forRoot({}),
    SharedModule
  ]
})
export class HomeModule { }
