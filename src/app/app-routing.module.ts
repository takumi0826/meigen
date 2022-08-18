import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDataComponent } from './page/create-data/create-data.component';
import { DeleteDataComponent } from './page/delete-data/delete-data.component';
import { TopComponent } from './page/top/top.component';

const routes: Routes = [
  { path: '', component: TopComponent },
  { path: 'create', component: CreateDataComponent },
  { path: 'delete', component: DeleteDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
