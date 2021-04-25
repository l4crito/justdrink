import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { FirstCapitalPipe } from './first-capital.pipe';



@NgModule({
  declarations: [
    HighlightDirective,
    FirstCapitalPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FirstCapitalPipe,
    HighlightDirective,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
