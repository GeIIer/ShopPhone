import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { RouterModule } from '@angular/router';
import { SearchByNamePipe} from 'src/app/shared/grid/search.pipe';
import { searchByPricePipe } from './searchByPrice.pipe';

@NgModule({
  declarations: [
    GridComponent,
    searchByPricePipe,
    SearchByNamePipe,
  ],
  imports: [
  CommonModule,
  RouterModule
],
  exports: [GridComponent],
})
export class GridModule {}
