import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticleKeduaComponent } from "./article-kedua/article-kedua.component";
import { ArticlePertamaComponent } from "./article-pertama/article-pertama.component";
import { ArticleComponent } from "./article.component";

const routes: Routes = [
    {
      path: '',
      component:ArticleComponent,
      children:[
       { 
            path: 'article-pertama',
            component:ArticlePertamaComponent     

        },
        {
            path: 'article-kedua',
            component:ArticleKeduaComponent
        }
      ]
    },
  ];

  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ArticleRoutingModule { }