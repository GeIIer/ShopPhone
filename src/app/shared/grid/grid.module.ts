import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [GridComponent],
  imports: [
  CommonModule,
  RouterModule
],
  exports: [GridComponent],
})
export class GridModule {}
