//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    let data = [];

    Ext.define('GridExamples.view.localGrid.LocalGridViewModel', {
        extend: 'Ext.app.ViewModel',
        alias: 'viewmodel.local-grid',

        stores: {
            gridStore: {
                model: 'GridExamples.model.TestModel',
                data: data
            }
        }
    }, function(){
        //populate store data
        for (let i = 1; i < 100; i++){
            data.push({
                id: i,
                txt: `txt_${i}`,
                date: new Date(new Date().setMonth(100 - i)),
                int: i,
                number: Math.random() * 100,
                bool: Math.random() > 0.5
            });
        }
    });

}());