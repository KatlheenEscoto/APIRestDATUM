import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormJobComponent } from './pages/form-job/form-job.component';
import { PlatformComponent } from './pages/platform/platform.component';
import { FormPlatformComponent } from './pages/platform/form-platform.component';
import { SearchComponent } from './pages/search/search.component';


const routes: Routes = [
  {
    path: 'job',
    component: FormJobComponent
  },
  {
    path: 'platform',
    component: PlatformComponent
  },
  {
    path: 'random',
    component: FormPlatformComponent
  },
  {
    path: 'search/:api_key',
    component: SearchComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'job'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
