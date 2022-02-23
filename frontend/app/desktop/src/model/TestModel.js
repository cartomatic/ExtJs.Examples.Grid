//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('GridExamples.model.TestModel', {
        extend: 'Ext.data.Model',

        fields: [
            { name: 'id', type: 'integer', allowNull: true, defaultValue: null },
            { name: 'txt', type: 'string', allowNull: true, defaultValue: null },
            { name: 'date', type: 'date', allowNull: true, defaultValue: null },
            { name: 'int', type: 'integer', allowNull: true, defaultValue: null },
            { name: 'number', type: 'number', allowNull: true, defaultValue: null },
            { name: 'bool', type: 'boolean', allowNull: true, defaultValue: null },
            { name: 'grouper', type: 'string', allowNull: true, defaultValue: null }
        ]
    });

}());