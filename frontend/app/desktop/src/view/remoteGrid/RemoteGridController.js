//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    let logHdr = '[PERMALINK]_s::,pink,',
        currentOrg = null;

    Ext.define('GridExamples.view.remoteGrid.RemoteGridController', {
        extend: 'Ext.app.ViewController',
        alias: 'controller.remote-grid',

        requires: [
            'GridExamples.view.remoteGrid.RemoteGridLocalization'
        ],

        mixins: [
            'mh.mixin.CallMeParent',
            'mh.mixin.Localization'
        ],

        init: function(){
            this.callMeParent(arguments);
            this.injectLocalizationToViewModel();
        }

    });

}());