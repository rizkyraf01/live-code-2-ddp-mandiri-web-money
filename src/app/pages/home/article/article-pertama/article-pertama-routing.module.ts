import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticlePertamaComponent } from "./article-pertama.component";

const routes: Routes = [
    {
      path: '',
      component: ArticlePertamaComponent
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ArticlePertamaRoutingModule { }