import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule } from '@angular/router';
import { GridModule } from 'src/app/shared/grid/grid.module';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    RouterModule.forChild([
      {
        path: '',
        component: CartComponent,
      },
    ]),
  ],
  exports: [CartComponent],
})
export class CartModule { }
