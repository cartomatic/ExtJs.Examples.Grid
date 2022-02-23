//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict'
    
    Ext.define('GridExamples.view.localGrid.LocalGridLocalization', {
        requires: [
            'mh.localization.Localization'
        ],
        statics: {
            localization: {
                viewName: {
                    en: 'Local grid',
                    pl: 'Local grid'
                },
                stdGrid: {
                    en: 'Standard grid',
                    pl: 'Grid standardowy'
                },
                colTypes: {
                    en: 'Column types',
                    pl: 'Typy kolumn'
                },
                actionCol: {
                    en: 'Action / widget column',
                    pl: 'Kolummna widget / akcja'
                },
                lockingGrid: {
                    en: 'Locking grid',
                    pl: 'Grid z blokowaniem kolumn'
                },
                rowExpander: {
                    en: 'Row expander',
                    pl: 'Expander wiersza'
                },
                cellEditor: {
                    en: 'Cell editor',
                    pl: 'Edytor pól'
                },
                rowEditor: {
                    en: 'Row editor',
                    pl: 'Edytor wierszy'
                },
                dragAndDrop: {
                    en: 'Drag & drop',
                    pl: 'Przeciągnij i upuść'
                },
                groupingGrid: {
                    en: 'Grouping grid',
                    pl: 'Grupowanie w gridzie'
                },
                treeGrid: {
                    en: 'Tree grid',
                    pl: 'Tree grid'
                }
            }
        }

    }, function(){
        mh.localization.Localization.registerTranslations(this);
    });
}());
