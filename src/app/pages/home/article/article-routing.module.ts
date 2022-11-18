import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
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

        }
      ]
    //   children:[
    //     { 
    //         path: 'article-pertama',
    //         loadChildren:()=> import('./article-pertama/article-pertama.module').then((m) => m.ArticlePertamaModule),      

    //     }
    //   ]

    },
  ];

  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ArticleRoutingModule { }