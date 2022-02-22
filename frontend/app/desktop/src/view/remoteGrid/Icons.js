//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('GridExamples.view.remoteGrid.Icons', {
        singleton: true,
        requires: [
            'mh.FontIconsDictionary'
        ],
        constructor: function() {
            mh.FontIconsDictionary.addIcons({
                rgViewHeader: 'x-li li-database-refresh'
            });
        }
    });
    
}());