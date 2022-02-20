//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('GridExamples.view.home.Home', {
        extend: 'Ext.Panel',

        xtype: 'home',

        requires: [
            'GridExamples.view.home.Icons',
            'GridExamples.view.home.HomeController',
            'GridExamples.view.home.HomeViewModel'
        ],

        controller: 'home',
        viewModel: {
            type: 'home'
        },

        iconCls: mh.FontIconsDictionary.getIcon('homeViewHeader'),

        padding: 15,

        bind: {
            title: '{localization.viewName}',
            html: '{localization.helloWorld}'
        }

    });

}());