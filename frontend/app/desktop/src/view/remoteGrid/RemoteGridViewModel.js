//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('GridExamples.view.remoteGrid.RemoteGridViewModel', {
        extend: 'Ext.app.ViewModel',
        alias: 'viewmodel.remote-grid',

        requires: [
            'GridExamples.data.proxy.CustomProxy'
        ],

        stores: {
            gridStore: {
                model: 'GridExamples.model.TestModel',
                autoLoad: true,
                pageSize: 25,
                proxy: {
                    type: 'rest',
                    reader: {
                        rootProperty: 'data',
                        totalProperty: 'total'
                    },
                    url: 'https://localhost:7006/datagate'
                }
            },
            gridStoreVirtual: {
                type: 'virtual',
                model: 'GridExamples.model.TestModel',
                autoLoad: true,
                pageSize: 25,
                proxy: {
                    type: 'rest',
                    reader: {
                        rootProperty: 'data',
                        totalProperty: 'total'
                    },
                    url: 'https://localhost:7006/datagate'
                }
            },
            gridStoreCustomProxy: {
                model: 'GridExamples.model.TestModel',
                autoLoad: true,
                pageSize: 25,
                proxy: {
                    type: 'custom',
                    url: 'https://localhost:7006/datagate/custom'
                }
            },
            gridStoreCustomProxyRemoteSort: {
                model: 'GridExamples.model.TestModel',
                autoLoad: true,
                pageSize: 25,
                remoteSort: true,
                remoteFilter: true,
                proxy: {
                    type: 'custom',
                    url: 'https://localhost:7006/datagate/filterable'
                }
            },
            gridStoreCustomProxyRemoteSortSieve: {
                model: 'GridExamples.model.TestModel',
                autoLoad: true,
                pageSize: 25,
                remoteSort: true,
                remoteFilter: true,
                // filters: [
                //     {
                //         property: 'txt',
                //         operator: 'whatever - always ilike',
                //         value: 'txt_10'
                //     }
                // ],
                proxy: {
                    type: 'custom-sieve',
                    url: 'https://localhost:7006/datagate/sieve',
                    pageSize: 25
                }
            }
        }
    });

}());