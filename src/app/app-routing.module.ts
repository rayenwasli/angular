import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component'; // Assurez-vous d'importer le bon chemin

const routes: Routes = [
  { path: '', redirectTo: '/reservation', pathMatch: 'full' }, // Rediriger vers reservation par défaut
  { path: 'reservation', component: ReservationComponent },
  // Autres routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
