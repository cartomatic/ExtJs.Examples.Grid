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
            'GridExamples.view.remoteGrid.RemoteGridViewModel'
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
                layout: {
                    type: 'card',
                    animation: 'fade'
                },
                items: [
                    {
                        tab: {
                            iconCls: mh.FontIconsDictionary.getIcon('lgColTypes'),
                            iconAlign: 'left',
                            bind: {
                                title: '{localization.colTypes}'
                            }
                        },
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'panel',
                                iconCls: mh.FontIconsDictionary.getIcon('lgColTypes'),
                                bind: {
                                    title: '{localization.colTypes}'
                                },
                                layout: 'fit',
                                items: [
                                    // {
                                    //     xtype: 'grid',
                                    //     bind: {
                                    //         store: '{gridStore}'
                                    //     },
                                    //     columns: [
                                    //         { xtype: 'rownumberer'},
                                    //         { text: 'txt', dataIndex: 'txt', flex: 1, renderer: (v) => `adjusted_${v}` },
                                    //         { xtype: 'datecolumn', text: 'date column', dataIndex: 'date', flex: 1, format: 'Y-m-d' },
                                    //         { text: 'column with renderer', dataIndex: 'int', flex: 1, renderer: (v) => `<span style="color:${v%2 === 0 ? 'red' : 'green'}">${v}</span>`, cell: { xtype:'gridcell', encodeHtml:false } },
                                    //         { xtype: 'numbercolumn', text: 'number column with renderer', dataIndex: 'number', flex: 1, renderer: Ext.util.Format.usMoney },
                                    //         { xtype: 'numbercolumn', text: 'number column with formatter', dataIndex: 'number', flex: 1, format: '0,0.00' },
                                    //         { xtype: 'booleancolumn', text: 'bool column', dataIndex: 'bool', flex: 1 },
                                    //         { xtype: 'checkcolumn', text: 'check column', dataIndex: 'bool', flex: 1 },
                                    //         { xtype: 'templatecolumn', text: 'template column', tpl: '{txt} ({bool})', flex: 1 }
                                    //     ]
                                    // }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]

    });

}());