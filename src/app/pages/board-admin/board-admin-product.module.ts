import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BoardAdminProductComponent } from './board-admin-product.component';



@NgModule({
  declarations: [
    BoardAdminProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BoardAdminProductComponent,
      },
    ]),
  ],
  exports: [BoardAdminProductComponent],
})
export class BoardAdminProductModule { }
