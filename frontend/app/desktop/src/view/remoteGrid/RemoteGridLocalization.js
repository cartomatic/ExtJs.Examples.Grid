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
                },
                paging: {
                    en: 'Paging',
                    pl: 'Stronicowanie'
                },
                continuousScroll: {
                    en: 'Continuous scroll',
                    pl: 'Continuous scroll'
                },
                customProxy: {
                    en: 'Custom proxy',
                    pl: 'Custom proxy'
                },
                remoteSort: {
                    en: 'Remote sort & filter',
                    pl: 'Zdalne sortowanie i filtrowanie'
                },
                sieve: {
                    en: 'Use Biarity/Sieve',
                    pl: 'Wykorzystanie Biarity/Sieve'
                }
            }
        }

    }, function(){
        mh.localization.Localization.registerTranslations(this);
    });
}());
