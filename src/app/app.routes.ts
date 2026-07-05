import { Routes } from '@angular/router';
import { Variables } from './components/variables/variables';
import { DataBinding } from './components/data-binding/data-binding';
import { DirectiveExamples } from './components/directive-examples/directive-examples';
import { PageNotfound } from './components/page-notfound/page-notfound';
import { Signals } from './components/signals/signals';
import { SignalForms } from './components/signal-forms/signal-forms';
import { ControlFlowstatements } from './components/control-flowstatements/control-flowstatements';

//routes are getting index so give empty path at first and wild card route at last 
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'databinding',  //this is Default route
        pathMatch: 'full'           // if the url is empty we need to navigate to databinding comp
    },
    {
        path: 'variables',
        component: Variables       //this is Normal route 
    },
    {
        path: 'databinding',
        component: DataBinding
    },
    {
        path: 'directives',
        component: DirectiveExamples
    },
    {
        path: 'signals',
        component: Signals
    },
    {
        path: 'signal-form',
        component: SignalForms
    },
    {
        path: 'control-flow',
        component: ControlFlowstatements
    },
    {
        path: '**',           //this is WildCard  route
        component: PageNotfound  //if the route doesnt match in the url we need to navigate to page not found comp
    }
];
