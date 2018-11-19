import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FrontPageModule } from './frontPage/front-page.module';
import { WfceRoutingModule } from './wfce-routing.module';
import { UserModule } from './user/user.module';
import { AuthService } from './shared-modules/services/auth.service';


@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    NgSelectModule,
    WfceRoutingModule,
    UserModule,
    FrontPageModule
  ],
  declarations: [],
  providers:[]
})
export class WfceModule { }
