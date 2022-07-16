import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'home',
      loadChildren: () =>
        import('./pages/home/home.module').then((m) => m.HomeModule),
    },
    {
      path: 'catalog',
      loadChildren: () =>
        import('./pages/catalog/catalog.module').then((m) => m.CatalogModule),
    },
    {
      path: 'cart',
      loadChildren: () =>
        import('./pages/cart/cart.module').then((m) => m.CartModule),
    },
    {
      path: 'login',
      loadChildren: () =>
        import('./pages/login/login.module').then((m) => m.LoginModule),
    },
    {
      path: 'profile',
      loadChildren: () =>
        import('./pages/profile/profile.module').then((m) => m.ProfileModule),
    },
    {
      path: 'register',
      loadChildren: () =>
        import('./pages/register/register.module').then((m) => m.RegisterModule),
    },
    {
      path: 'products',
      loadChildren: () =>
        import('./pages/products/products.module').then((m) => m.ProductsModule),
    },
  ],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
