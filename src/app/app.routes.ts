import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DataOffersComponent } from './components/data-offers/data-offers.component';
import { CreateDataOffersComponent } from './components/create-data-offers/create-data-offers.component';
import { EdcManagementComponent } from './components/edc-management/edc-management.component';
import { CreateEdcComponent } from './components/edc-management/create-edc/create-edc.component';
import { PoliciesComponent } from './components/policies/policies.component';
import { ContractsComponent } from './components/contracts/contracts.component';
import { TransferHistoryComponent } from './components/transfer-history/transfer-history.component';
import { CatalogBrowserComponent } from './components/catalog-browser/catalog-browser.component';
import { AssetsComponent } from './components/assets/assets.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'data-offers',
    component: DataOffersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-data-offers',
    component: CreateDataOffersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edc-management',
    component: EdcManagementComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edc-management/create',
    component: CreateEdcComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'policies',
    component: PoliciesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'assets',
    component: AssetsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'catalog-browser',
    component: CatalogBrowserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'contracts',
    component: ContractsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'transfer-history',
    component: TransferHistoryComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: 'login' },
];
