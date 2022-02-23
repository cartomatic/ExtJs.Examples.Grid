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
                rgViewHeader: 'x-li li-database-refresh',
                rgPaging: 'x-i54c i54c-right-14',
                rgContinuousScroll: 'x-i54c i54c-load-cloud3',
                rgCustomProxy: 'x-i54 i54-translate',
                rgRemoteSort: 'x-li li-sort-alpha-asc',
                rgSieve: 'x-i54c i54c-filter'
            });
        }
    });
    
}());