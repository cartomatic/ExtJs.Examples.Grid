//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('GridExamples.view.main.MainController', {

        extend: 'mh.module.mainView.MainViewDesktopController',

        alias: 'controller.main',

        mixins: [
            'mh.mixin.CallMeParent'
        ],

        init: function(){
            this.callMeParent('init', arguments);

            //intercept main view items created, so can verify them an observe specific events!
            this.watchGlobal('mainview::itemcreated', this.onMainViewItemCreated, this);

            //insert logo btn as the first item...
            this.getView().getLbar().insert(0, {
                xtype: 'button',

                //TODO - avoid color change on mouse over perhaps???

                ui: 'navmenu-app-btn',

                text: 'Grid Examples',
                icon: 'resources/images/logo/logo-64x64.png',
                style: 'font-weight: bold; font-variant: small-caps; color:#F3CD1D;',

                textAlign: 'left',
            });
        },

        firstRouteRestore: true,

        onMainViewItemCreated: function(evtData){
            //handle custom main view setup for specific modules
        }

    });

}());