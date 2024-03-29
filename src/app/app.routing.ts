import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from "./components/about/about.component";
import { CreateComponent } from "./components/create/create.component";
import { ContactComponent } from "./components/contact/contact.component";
import { DetailComponent } from "./components/detail/detail.component";
import { EditComponent } from "./components/edit/edit.component";
import { ErrorComponent } from "./components/error/error.component";
import { ProjectsComponent } from "./components/projects/projects.component";

const routes: Routes = [
    { path: '', component: AboutComponent },
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'create-project', component: CreateComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'project/:id', component: DetailComponent },
    { path: 'edit-project/:id', component: EditComponent },
    { path: '**', component: ErrorComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
