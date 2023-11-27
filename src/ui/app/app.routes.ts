/**
 * Contributors:
 * - Lubna Fatima
 * - Gangadaran Kameswaran
 */

import { Routes } from '@angular/router';
import { LubnaFatimaComponent } from './lubna-fatima/lubna-fatima.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { HomeComponent } from './home/home.component';
import { ProgramsComponent } from './programs/programs.component';
import { SurveyListComponent } from './survey-list/survey-list.component';

// Angular routes configuration.
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect to 'home' for an empty path.
    { path: 'home', component: HomeComponent }, // Route to the 'Home' component.
    { path: 'about/lubna-fatima', component: LubnaFatimaComponent }, // Route to the 'LubnaFatima' component.
    { path: 'survey', component: SurveyFormComponent }, // Route to the 'SurveyForm' component.
    { path: 'programs', component: ProgramsComponent }, // Route to the 'Programs' component.
    { path: 'survey-list', component: SurveyListComponent } // Route to the 'SurveyListComponent'.
];