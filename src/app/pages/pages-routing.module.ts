import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: '',
          loadChildren: () =>
            import('./home/home.module').then((m) => m.HomeModule),
        },
        {
          path: 'article',
          loadChildren: () =>
            import('./home/article/article.module').then((m) => m.ArticleModule),
        },
        {
            path: 'about',
            loadChildren: () =>
              import('./home/tentang-kami/tentang-kami.module').then((m) => m.TentangKamiModule),
          },
      ],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class PagesRoutingModule { }