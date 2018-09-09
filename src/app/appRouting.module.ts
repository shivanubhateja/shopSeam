import { Router, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { ListProductsComponent } from './list-products/list-products/list-products.component';
import { NgModule } from '@angular/core';
import { LoginModule } from './login/login.module';
import { ListProductsModule } from './list-products/list-products.module';
import { LoginRouteGuard } from './app.routeGuard';

const routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent},
    { path: 'products', component: ListProductsComponent, canActivate: [LoginRouteGuard]}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes), LoginModule, ListProductsModule ],
    exports: [RouterModule]
})
export class AppRoutingModule{ }