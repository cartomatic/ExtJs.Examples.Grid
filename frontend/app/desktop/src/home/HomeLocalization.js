//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict'
    
    Ext.define('GridExamples.view.home.HomeLocalization', {
        requires: [
            'mh.localization.Localization'
        ],
        statics: {
            localization: {
                viewName: {
                    en: 'Home',
                    pl: 'Home'
                },
                helloWorld: {
                    en: 'This project aims at demostrating some grid features that may come in useful when creating data intensive apps.<br/>' +
                        'Examples are split into two types:<br/>' +
                        '<ul><li>Local store gird</li><li>Remote store grid</li></ul>',
                    pl: 'Projekt mający na celu demonstrację właściwości komponentu "grid" przydatnych w aplikacjach wyświetlających duże ilości danych.<br/>' +
                        'Przykłady podzielone zostały na dwie kategorie:<br/>' +
                        '<ul><li>Gridy oparte o lokalny store</li><li>Gridy oparte o zdalny store</li></ul>'
                }
            }
        }

    }, function(){
        mh.localization.Localization.registerTranslations(this);
    });
}());
