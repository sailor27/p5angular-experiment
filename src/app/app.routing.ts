import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectoryComponent } from './directory/directory.component';
import { OtherComponent } from './other/other.component';
import { CanvasComponent } from './canvas/canvas.component';
const appRoutes: Routes = [
	{
  path: '',
  component: DirectoryComponent
	},
	{
  path: 'other',
  component: OtherComponent
	},
	{
  path: 'canvas',
  component: CanvasComponent
	},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
