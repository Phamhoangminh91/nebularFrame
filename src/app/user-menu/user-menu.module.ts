import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { NbMenuModule } from '@nebular/theme';
import { NbCardModule } from '@nebular/theme';

@NgModule({
  declarations: [UserMenuComponent],
  imports: [
    CommonModule,
    NbMenuModule,
    NbCardModule
  ]
})
export class UserMenuModule { }
