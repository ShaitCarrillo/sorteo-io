import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapturaComponent } from './pages/captura/captura.component';
import { GiveawayComponent } from './pages/giveaway/giveaway.component';

const routes: Routes = [
  {
    path: '', component: CapturaComponent
  },
  {
    path: 'giveaway', component: GiveawayComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
