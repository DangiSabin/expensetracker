import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListexpensesComponent } from './components/listexpenses/listexpenses.component';
import { AddexpenseComponent } from './components/addexpense/addexpense.component';


const routes: Routes = [
  {path:'expenses',component:ListexpensesComponent},
  {path:'addexpense',component:AddexpenseComponent},
  {path:'',redirectTo:'/expenses',pathMatch:'full'},
  {path:'editexpense/:id',component:AddexpenseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
