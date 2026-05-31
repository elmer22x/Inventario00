import { Routes } from '@angular/router';
import { Layout } from './layout/layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Login } from './auth/login/login';
import { Categorias } from './pages/categorias/categorias';
import { Productos } from './pages/productos/productos';
import { Movimientos } from './pages/movimientos/movimientos';
import { Usuarios } from './pages/usuarios/usuarios';
import { Catalogo } from './pages/catalogo/catalogo';
import { Reporte } from './pages/reporte/reporte';
import { authGuard, guestGuard } from './guards/auth-guard';
import { Cliente } from './pages/cliente/cliente';
import { Proveedor } from './pages/proveedor/proveedor';
import { Venta } from './pages/venta/venta';
import { Compra } from './pages/compra/compra';
import { Configuracion } from './pages/configuracion/configuracion';
import { ReportesAvanzados } from './pages/reportes-avanzados/reportes-avanzados';


export const routes: Routes = [
  {
    path: 'login',
    component: Login,
    canActivate: [guestGuard],
  },

  {
    path: '',
    component: Layout,
    canActivate: [authGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        component: Dashboard
      },
      {
        path: 'reporte',
        component: Reporte,
      },
      {
        path: 'categorias',
        component: Categorias
      },
      {
        path: 'productos',
        component: Productos
      },
      {
        path: 'catalogo',
        component: Catalogo
      },
      {
        path: 'movimientos',
        component: Movimientos
      },
      {
        path: 'usuarios',
        component: Usuarios
      },
      {
        path: 'clientes',
        component: Cliente
      },
      {
        path: 'proveedores',
        component: Proveedor
      },
      {
        path: 'ventas',
        component: Venta
      },
      {
        path: 'compras',
        component: Compra
      },
      {
        path: 'configuracion',
        component: Configuracion
      },
      {
        path: 'reportes-avanzados',
        component: ReportesAvanzados
      }
    ]
  },

  {
    path: '**',
    redirectTo: 'login'
  }
];