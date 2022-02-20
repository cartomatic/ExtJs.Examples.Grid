//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('GridExamples.view.main.Icons', {
        singleton: true,
        requires: [
            'mh.FontIconsDictionary'
        ],
        constructor: function() {
            mh.FontIconsDictionary.addIcons({
                mainMenuHome: 'x-li li-home'
            });
        }
    });
    
}());