//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('GridExamples.store.RoutesNonMainMenu', {
        extend: 'mh.data.store.RoutesNonMainMenu',

        requires: [
            'mh.data.model.Route'
        ],

        data: [
            
        ]
    });

}());