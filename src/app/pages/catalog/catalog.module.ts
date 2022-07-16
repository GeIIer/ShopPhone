import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent} from './catalog.component';
import { RouterModule } from '@angular/router';
import { GridModule } from 'src/app/shared/grid/grid.module';



@NgModule({
  declarations: [
    CatalogComponent,
  ],
  imports: [
    CommonModule,
    GridModule,
    RouterModule.forChild([
      {
        path: '',
        component: CatalogComponent,
      },
    ]),
  ],
})
export class CatalogModule { }
