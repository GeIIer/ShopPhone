import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent} from './catalog.component';
import { RouterModule } from '@angular/router';
import { GridModule } from 'src/app/shared/grid/grid.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CatalogComponent,
  ],
  imports: [
    CommonModule,
    GridModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CatalogComponent,
      },
    ]),
  ],
})
export class CatalogModule { }
