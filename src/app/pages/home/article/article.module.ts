import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticlePertamaModule } from './article-pertama/article-pertama.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ArticlePertamaModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
