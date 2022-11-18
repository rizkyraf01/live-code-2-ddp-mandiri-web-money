import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticleKeduaComponent } from "./article-kedua.component";

const routes: Routes = [
    {
      path: 'article-kedua',
      component: ArticleKeduaComponent
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ArticleKeduaRoutingModule { }