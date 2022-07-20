import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardAdminComponent } from './board-admin.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BoardAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BoardAdminComponent,
      },
    ]),
  ],
  exports: [BoardAdminComponent],
})
export class BoardAdminModule { }
