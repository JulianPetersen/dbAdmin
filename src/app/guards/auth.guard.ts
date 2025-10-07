import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GlobalService } from '../services/global.service';

export const authGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router)
 

  if (typeof window !== 'undefined' && !!localStorage.getItem('token')){
    return true
  }else{
    router.navigateByUrl('/login')
    return false
  }
};
