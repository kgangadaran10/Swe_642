/**
 * Contributors:
 * - Lubna Fatima
 */

import { Routes } from '@angular/router';
import { LubnaFatimaComponent } from './lubna-fatima/lubna-fatima.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { HomeComponent } from './home/home.component';
import { ProgramsComponent } from './programs/programs.component';
import { SurveyListComponent } from './survey-list/survey-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about/lubna-fatima', component: LubnaFatimaComponent },
    { path: 'survey', component: SurveyFormComponent },
    { path: 'programs', component: ProgramsComponent },
    { path:'survey-list', component:SurveyListComponent}
];
