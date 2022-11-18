import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TentangKamiComponent } from './tentang-kami/tentang-kami.component';
import { BannerComponent } from './banner/banner.component';
import { HomeRoutingModule } from './home-routing.module';
import { ArticleComponent } from './article/article.component';



@NgModule({
  declarations: [
    HomeComponent,
    TentangKamiComponent,
    BannerComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
