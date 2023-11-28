/**
 * Contributors:
 * - Lubna Fatima
 */

import { Routes } from '@angular/router';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { HomeComponent } from './home/home.component';
import { ProgramsComponent } from './programs/programs.component';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { SubmitComponent } from './submit/submit.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'survey', component: SurveyFormComponent },
    { path: 'programs', component: ProgramsComponent },
    { path: 'survey-list', component: SurveyListComponent},
    { path: 'submit', component: SubmitComponent },
];
