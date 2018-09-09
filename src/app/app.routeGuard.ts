import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoginRouteGuard implements CanActivate {
    constructor(private router: Router){

    }
    canActivate () {
        if(localStorage.getItem('loggedIn') === 'true'){
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }
}