//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict'
    
    Ext.define('GridExamples.view.remoteGrid.RemoteGridLocalization', {
        requires: [
            'mh.localization.Localization'
        ],
        statics: {
            localization: {
                viewName: {
                    en: 'Remote grid',
                    pl: 'Remote grid'
                }
            }
        }

    }, function(){
        mh.localization.Localization.registerTranslations(this);
    });
}());
