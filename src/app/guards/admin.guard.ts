import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const adminGuard: CanActivateFn = () => {
  const router = inject(Router);

  // Verificamos que estamos en el navegador
  if (typeof window !== 'undefined' && window.localStorage) {
    const roles = JSON.parse(localStorage.getItem('roles') || '[]');

    if (roles.includes('admin')) {
      return true;
    }
  }

  // Si no tiene el rol o no hay localStorage, redirigir
  router.navigate(['/admin']); // Mejor que mandarlo a /admin si ya no tiene permiso
  return false;
};