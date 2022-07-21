import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdminProductComponent } from './pages/board-admin/board-admin-product.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'home',
      loadChildren: () =>
        import('./pages/home/home.module').then((m) => m.HomeModule),
    },
    {
      path: '',
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
    {
      path: 'admin',
      loadChildren: () =>
        import('./pages/board-admin/board-admin.module').then((m) => m.BoardAdminModule),
    },
    {
      path: 'newproduct',
      loadChildren: () =>
        import('./pages/board-admin/board-admin-product.module').then((m) => m.BoardAdminProductModule),
    },
  ],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
