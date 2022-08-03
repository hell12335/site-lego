import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LoginComponent } from './login/login.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  { path: "formulario", component: FormularioComponent },
  { path: "produtos", component: ProdutosComponent },
  { path: "perfil", component: PerfilComponent },
  { path: "carrinho", component: CarrinhoComponent },
  { path: "pedidos", component: PedidosComponent },
  { path: "**", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
