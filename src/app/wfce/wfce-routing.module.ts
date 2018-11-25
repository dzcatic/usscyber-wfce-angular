import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { FrontPageComponent } from './frontPage/component/front-page/front-page.component';
import { FrontPageModule } from './frontPage/front-page.module';

const routes: Routes = [
    /**
     * Just in the case there is admin panel
     */
   /*  {
      path: "admin",
      loadChildren: 'app/wfce/user/user.module#UserModule'
    }, */
    {
      path: "dashboard",
      loadChildren: './user/user.module#UserModule'
    },
    {
      path: "",
      loadChildren: () => FrontPageModule//'./frontPage/front-page.module#FrontPageModule'
    }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WfceRoutingModule {
}
