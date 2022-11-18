import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticlePertamaModule } from './article-pertama/article-pertama.module';
import { ArticleKeduaModule } from './article-kedua/article-kedua.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ArticlePertamaModule,
    ArticleKeduaModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
