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
                    en: 'This project is a webinar demo project that aims at demostrating some common grid features that may come in useful when creating data intensive apps.<br/>' +
                        'Because of that examples are meant to be really simple and showcaseable during a live session and can be then anylyzed at ones own pace<br/><br/>' +
                        'Examples are split into two types:<br/>' +
                        '<ul><li>Local store grid</li><li>Remote store grid</li></ul>' +
                        '<br/><br/>' +
                        'The remote grid examples are backed by a simple .NET 6 WebAPI that is located in the backend directory',
                    pl: 'Projekt będący projektem demo dla webinaru; ma na celu demonstrację właściwości komponentu "grid" przydatnych w aplikacjach wyświetlających duże ilości danych.<br/><br/>' +
                        'Ten projekt z założenia jest maksymalni prosty tak, aby przykłdy były zrozumiałe i łatwo demonstrowalne</br>' +
                        'Przykłady podzielone zostały na dwie kategorie:<br/>' +
                        '<ul><li>Gridy oparte o lokalny store</li><li>Gridy oparte o zdalny store</li></ul>' +
                        '<br/><br/>' +
                        'Przykłady ze zdalnym gridem działają z prostym API napisanym w .NET 6 zlokalizowanym w folderze backend'
                }
            }
        }

    }, function(){
        mh.localization.Localization.registerTranslations(this);
    });
}());
