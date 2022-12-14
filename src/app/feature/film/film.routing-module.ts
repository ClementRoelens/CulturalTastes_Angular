import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FilmComponent } from "./components/film.component";

const routes: Routes = [
    { path: '', component: FilmComponent },
    { path: ':id', component: FilmComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FilmRoutingModule { }