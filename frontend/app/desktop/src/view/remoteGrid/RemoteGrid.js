//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('GridExamples.view.remoteGrid.RemoteGrid', {
        extend: 'Ext.Panel',

        xtype: 'remote-grid',

        requires: [
            'GridExamples.view.remoteGrid.Icons',
            'GridExamples.view.remoteGrid.RemoteGridController',
            'GridExamples.view.remoteGrid.RemoteGridViewModel',
            'Ext.grid.plugin.PagingToolbar'
        ],

        controller: 'remote-grid',
        viewModel: {
            type: 'remote-grid'
        },

        iconCls: mh.FontIconsDictionary.getIcon('rgViewHeader'),

        padding: 15,

        bind: {
            title: '{localization.viewName}'
        },

        layout: 'fit',

        items: [
            {
                xtype: 'tabpanel',
                tabBarPosition: 'left',
                tabRotation: 'none',
                layout: {
                    type: 'card',
                    animation: 'fade'
                },
                defaults: {
                    xtype: 'panel'
                },
                items: [
                    {
                        tab: {
                            iconCls: mh.FontIconsDictionary.getIcon('rgPaging'),
                            iconAlign: 'left',
                            bind: {
                                title: '{localization.paging}'
                            }
                        },
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'panel',
                                iconCls: mh.FontIconsDictionary.getIcon('rgPaging'),
                                bind: {
                                    title: '{localization.paging}'
                                },
                                layout: 'fit',
                                items: [
                                    {
                                        xtype: 'grid',
                                        plugins: {
                                            gridpagingtoolbar: true
                                        },
                                        bind: {
                                            store: '{gridStore}'
                                        },
                                        columns: [
                                            { xtype: 'rownumberer', width: 75},
                                            { text: 'txt', dataIndex: 'txt', flex: 1, renderer: (v) => `adjusted_${v}` },
                                            { xtype: 'datecolumn', text: 'date column', dataIndex: 'date', flex: 1, format: 'Y-m-d H:i:s' },
                                            { text: 'int', dataIndex: 'int', flex: 1 },
                                            { xtype: 'numbercolumn', text: 'number column with formatter', dataIndex: 'number', flex: 1, format: '0,0.00' },
                                            { xtype: 'booleancolumn', text: 'bool column', dataIndex: 'bool', flex: 1 }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        tab: {
                            iconCls: mh.FontIconsDictionary.getIcon('rgContinuousScroll'),
                            iconAlign: 'left',
                            bind: {
                                title: '{localization.continuousScroll}'
                            }
                        },
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'panel',
                                iconCls: mh.FontIconsDictionary.getIcon('rgContinuousScroll'),
                                bind: {
                                    title: '{localization.continuousScroll}'
                                },
                                layout: 'fit',
                                items: [
                                    {
                                        xtype: 'grid',
                                        bind: {
                                            store: '{gridStoreVirtual}'
                                        },
                                        columns: [
                                            { xtype: 'rownumberer', width: 75},
                                            { text: 'txt', dataIndex: 'txt', flex: 1, renderer: (v) => `adjusted_${v}` },
                                            { xtype: 'datecolumn', text: 'date column', dataIndex: 'date', flex: 1, format: 'Y-m-d H:i:s' },
                                            { xtype: 'numbercolumn', text: 'number column with formatter', dataIndex: 'number', flex: 1, format: '0,0.00' },
                                            { xtype: 'booleancolumn', text: 'bool column', dataIndex: 'bool', flex: 1 }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        tab: {
                            iconCls: mh.FontIconsDictionary.getIcon('rgCustomProxy'),
                            iconAlign: 'left',
                            bind: {
                                title: '{localization.customProxy}'
                            }
                        },
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'panel',
                                iconCls: mh.FontIconsDictionary.getIcon('rgCustomProxy'),
                                bind: {
                                    title: '{localization.customProxy}'
                                },
                                layout: 'fit',
                                items: [
                                    {
                                        xtype: 'grid',
                                        plugins: {
                                            gridpagingtoolbar: true
                                        },
                                        bind: {
                                            store: '{gridStoreCustomProxy}'
                                        },
                                        columns: [
                                            { xtype: 'rownumberer', width: 75},
                                            { text: 'txt', dataIndex: 'txt', flex: 1, renderer: (v) => `adjusted_${v}` },
                                            { xtype: 'datecolumn', text: 'date column', dataIndex: 'date', flex: 1, format: 'Y-m-d H:i:s' },
                                            { text: 'int', dataIndex: 'int', flex: 1 },
                                            { xtype: 'numbercolumn', text: 'number column with formatter', dataIndex: 'number', flex: 1, format: '0,0.00' },
                                            { xtype: 'booleancolumn', text: 'bool column', dataIndex: 'bool', flex: 1 }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        tab: {
                            iconCls: mh.FontIconsDictionary.getIcon('rgRemoteSort'),
                            iconAlign: 'left',
                            bind: {
                                title: '{localization.remoteSort}'
                            }
                        },
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'panel',
                                iconCls: mh.FontIconsDictionary.getIcon('rgRemoteSort'),
                                bind: {
                                    title: '{localization.remoteSort}'
                                },
                                layout: 'fit',
                                items: [
                                    {
                                        xtype: 'grid',
                                        plugins: {
                                            gridpagingtoolbar: true
                                        },
                                        bind: {
                                            store: '{gridStoreCustomProxyRemoteSort}'
                                        },
                                        columns: [
                                            { xtype: 'rownumberer', width: 75},
                                            { text: 'txt', dataIndex: 'txt', flex: 1, renderer: (v) => `adjusted_${v}` },
                                            { xtype: 'datecolumn', text: 'date column', dataIndex: 'date', flex: 1, format: 'Y-m-d H:i:s' },
                                            { text: 'int', dataIndex: 'int', flex: 1 },
                                            { xtype: 'numbercolumn', text: 'number column with formatter', dataIndex: 'number', flex: 1, format: '0,0.00' },
                                            { xtype: 'booleancolumn', text: 'bool column', dataIndex: 'bool', flex: 1 }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        tab: {
                            iconCls: mh.FontIconsDictionary.getIcon('rgSieve'),
                            iconAlign: 'left',
                            bind: {
                                title: '{localization.sieve}'
                            }
                        },
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'panel',
                                iconCls: mh.FontIconsDictionary.getIcon('rgSieve'),
                                bind: {
                                    title: '{localization.sieve}'
                                },
                                layout: 'fit',
                                items: [
                                    {
                                        xtype: 'grid',
                                        plugins: {
                                            gridpagingtoolbar: true
                                        },
                                        bind: {
                                            store: '{gridStoreCustomProxyRemoteSortSieve}'
                                        },
                                        columns: [
                                            { xtype: 'rownumberer', width: 75},
                                            { text: 'txt', dataIndex: 'txt', flex: 1, renderer: (v) => `adjusted_${v}` },
                                            { xtype: 'datecolumn', text: 'date column', dataIndex: 'date', flex: 1, format: 'Y-m-d H:i:s' },
                                            { text: 'int', dataIndex: 'int', flex: 1 },
                                            { xtype: 'numbercolumn', text: 'number column with formatter', dataIndex: 'number', flex: 1, format: '0,0.00' },
                                            { xtype: 'booleancolumn', text: 'bool column', dataIndex: 'bool', flex: 1 }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]

    });

}());