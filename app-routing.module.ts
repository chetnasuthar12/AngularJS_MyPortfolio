import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProficiencyComponent } from './proficiency/proficiency.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'education',component: EducationComponent},
  {path: 'proficiency',component: ProficiencyComponent},
  {path: 'projects',component: ProjectsComponent},
  {path: 'certificates',component: CertificatesComponent},
  {path: 'contact',component: ContactComponent},
  {path: '**', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
