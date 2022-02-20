//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('GridExamples.view.main.Main', {
        extend: 'mh.module.mainView.MainViewDesktop',

        requires: [
            'mh.module.settings.UserSettings',
            'GridExamples.view.main.Icons',
            'GridExamples.view.main.MainController'
        ],

        xtype: 'main',

        controller: 'main',

        //remove app switcher for the time being - no other apps for blank project!
        appSwitcher: null,

        //remove org ctx switcher - does not make sense for blank project dashboard
        orgContextSwitcher: null,

        //reload instead of trying to redirect to a default app
        navMenuLogOffReload: true,

        //no need for user settings section so far
        navMenuHideSettingsBtn: false
    });

}());