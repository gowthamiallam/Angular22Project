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
        path: 'dashboard',
        // The component is only downloaded when the user visits /dashboard
        //please see the network for understanding how it is downloading and the bundles too
        loadComponent: () => import('./components/dashboard/dashboard').then(m => m.Dashboard)
    },
    // {
    //     path: 'admin',
    //     loadComponent: () => import('./components/admin/admin').then(m => m.Admin)
    // },
    // If you have an entire feature section(like an / admin panel with multiple sub - pages) and all of them are standalone components, you can lazy load their child routes together using children.
    {
        path: 'admin',
        // 1. Lazy load the main Admin Shell Component
        loadComponent: () => import('./components/admin/admin').then(m => m.Admin),

        // 2. Define the sub-routes (settings and profile) inside children
        children: [
            {
                path: '',
                // Bounces /admin directly to /admin/profile by default
                redirectTo: 'profile',
                pathMatch: 'full'
            },
            {
                path: 'profile',
                // Lazy load the Profile Component
                loadComponent: () => import('./components/admin/admin-profile/admin-profile').then(m => m.AdminProfile)
            },
            {
                path: 'settings',
                // Lazy load the Settings Component
                loadComponent: () => import('./components/admin/admin-settings/admin-settings').then(m => m.AdminSettings)
            }
        ]
    },
    {
        path: '**',           //this is WildCard  route
        component: PageNotfound  //if the route doesnt match in the url we need to navigate to page not found comp
    }
];
